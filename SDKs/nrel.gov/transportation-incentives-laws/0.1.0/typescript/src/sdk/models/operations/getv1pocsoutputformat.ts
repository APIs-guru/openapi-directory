import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetV1PocsOutputFormatOutputFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetV1PocsOutputFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=output_format" })
  outputFormat: GetV1PocsOutputFormatOutputFormatEnum;
}


export class GetV1PocsOutputFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction: string;
}


export class GetV1PocsOutputFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1PocsOutputFormatPathParams;

  @Metadata()
  queryParams: GetV1PocsOutputFormatQueryParams;
}


export class GetV1PocsOutputFormatResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
