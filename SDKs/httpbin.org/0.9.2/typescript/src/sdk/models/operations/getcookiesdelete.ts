import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCookiesDeleteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=freeform" })
  freeform?: string;
}


export class GetCookiesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCookiesDeleteQueryParams;
}


export class GetCookiesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
