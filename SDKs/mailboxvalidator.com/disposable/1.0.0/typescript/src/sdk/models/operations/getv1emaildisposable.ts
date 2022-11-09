import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetV1EmailDisposableFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetV1EmailDisposableQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetV1EmailDisposableFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
}


export class GetV1EmailDisposableRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV1EmailDisposableQueryParams;
}


export class GetV1EmailDisposableResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getV1EmailDisposable200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
