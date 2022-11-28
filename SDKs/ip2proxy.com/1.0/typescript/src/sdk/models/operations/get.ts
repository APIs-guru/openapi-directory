import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetFormatEnum {
    Json = "json",
    Xml = "xml"
}


export class GetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFormatEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;
}


export class GetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQueryParams;
}


export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  get200TextHtmlString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
