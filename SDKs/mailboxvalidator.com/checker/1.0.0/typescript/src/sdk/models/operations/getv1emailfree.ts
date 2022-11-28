import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetV1EmailFreeFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetV1EmailFreeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetV1EmailFreeFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
}


export class GetV1EmailFreeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV1EmailFreeQueryParams;
}


export class GetV1EmailFreeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getV1EmailFree200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
