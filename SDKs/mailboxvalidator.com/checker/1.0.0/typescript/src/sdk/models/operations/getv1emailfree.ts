import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetV1EmailFreeFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetV1EmailFreeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetV1EmailFreeFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
}


export class GetV1EmailFreeRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV1EmailFreeQueryParams;
}


export class GetV1EmailFreeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getV1EmailFree200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
