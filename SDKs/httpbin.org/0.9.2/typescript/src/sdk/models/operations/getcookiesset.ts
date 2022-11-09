import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCookiesSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=freeform" })
  freeform?: string;
}


export class GetCookiesSetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCookiesSetQueryParams;
}


export class GetCookiesSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
