import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetV1PocsOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetV1PocsOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=output_format" })
  outputFormat: GetV1PocsOutputFormatOutputFormatEnum;
}


export class GetV1PocsOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=jurisdiction" })
  jurisdiction: string;
}


export class GetV1PocsOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1PocsOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1PocsOutputFormatQueryParams;
}


export class GetV1PocsOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
