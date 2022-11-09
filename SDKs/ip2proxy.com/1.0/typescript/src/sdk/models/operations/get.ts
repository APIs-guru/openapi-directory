import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetFormatEnum {
    Json = "json"
,    Xml = "xml"
}


export class GetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: GetFormatEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ip" })
  ip: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=package" })
  package?: string;
}


export class GetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetQueryParams;
}


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  get200TextHtmlString?: string;

  @Metadata()
  statusCode: number;
}
