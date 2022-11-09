import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiVVersionMetalsBenchmarkSupportedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class GetApiVVersionMetalsBenchmarkSupportedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: shared.ResponseFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class GetApiVVersionMetalsBenchmarkSupportedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiVVersionMetalsBenchmarkSupportedPathParams;

  @Metadata()
  queryParams: GetApiVVersionMetalsBenchmarkSupportedQueryParams;
}


export class GetApiVVersionMetalsBenchmarkSupportedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getApiVVersionMetalsBenchmarkSupported200ApplicationJsonStrings?: string[];

  @Metadata()
  problemDetails?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
