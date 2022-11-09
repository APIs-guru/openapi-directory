import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRedirectToQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=status_code" })
  statusCode?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetRedirectToRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRedirectToQueryParams;
}


export class GetRedirectToResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
