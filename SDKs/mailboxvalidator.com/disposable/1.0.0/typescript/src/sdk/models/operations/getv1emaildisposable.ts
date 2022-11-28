import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetV1EmailDisposableFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetV1EmailDisposableQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetV1EmailDisposableFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
}


export class GetV1EmailDisposableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV1EmailDisposableQueryParams;
}


export class GetV1EmailDisposableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getV1EmailDisposable200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
