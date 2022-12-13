import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";

import { ParamDecorator } from "./pathparams";
import { parseParamDecorator } from "./utils";

export const headerMetadataKey = "headerParam";

export function getHeadersFromRequest(headerParams: any): any {
  if (headerParams == null) return;
  const headers: any = {};
  const fieldNames: string[] = Object.getOwnPropertyNames(headerParams);
  fieldNames.forEach((fname) => {
    const headerAnn: string = Reflect.getMetadata(
      headerMetadataKey,
      headerParams,
      fname
    );
    if (headerAnn == null) return;
    const headerDecorator: ParamDecorator = parseParamDecorator(
      headerAnn,
      fname,
      "simple",
      false
    );
    if (headerDecorator == null) return;
    const value: string = serializeHeader(
      headerParams[fname],
      headerDecorator.Explode
    );
    if (value != "") headers[headerDecorator.ParamName] = value;
  });
  return headers;
}

export function getHeadersFromResponse(
  headers: RawAxiosResponseHeaders | AxiosResponseHeaders
): Map<string, string[]> {
  // TODO: convert Axios response headers to map
  return new Map<string, string[]>();
}

function serializeHeader(header: any, explode: boolean): string {
  const headerVals: string[] = [];
  if (Array.isArray(header)) {
    header.forEach((val: any) => {
      headerVals.push(String(val));
    });
  } else if (header instanceof Map) {
    header.forEach((headerVal, headerKey) => {
      if (explode) headerVals.push(`${headerKey}=${headerVal}`);
      else headerVals.push(`${headerKey},${headerVal}`);
    });
  } else if (header instanceof Object) {
    Object.getOwnPropertyNames(header).forEach((headerKey: string) => {
      if (explode) headerVals.push(`${headerKey}=${header[headerKey]}`);
      else headerVals.push(`${headerKey},${header[headerKey]}`);
    });
  } else {
    return String(header);
  }
  return headerVals.join(",");
}
