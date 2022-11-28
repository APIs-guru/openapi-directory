import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetV1IdOutputFormatOutputFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetV1IdOutputFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=output_format" })
  outputFormat: GetV1IdOutputFormatOutputFormatEnum;
}


export class GetV1IdOutputFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expired" })
  expired?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=poc" })
  poc?: boolean;
}


export class GetV1IdOutputFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1IdOutputFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetV1IdOutputFormatQueryParams;
}


export class GetV1IdOutputFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
