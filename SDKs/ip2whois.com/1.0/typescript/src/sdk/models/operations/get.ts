import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key: string;
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
