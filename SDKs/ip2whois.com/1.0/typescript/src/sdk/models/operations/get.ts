import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
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
