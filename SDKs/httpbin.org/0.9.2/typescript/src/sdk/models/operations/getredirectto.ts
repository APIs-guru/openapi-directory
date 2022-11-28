import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRedirectToQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status_code" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class GetRedirectToRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRedirectToQueryParams;
}


export class GetRedirectToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
