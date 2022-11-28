import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OndStatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=new-routes" })
  newRoutes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=old-routes" })
  oldRoutes?: string;
}


export class OndStatusHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OndStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OndStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OndStatusQueryParams;

  @SpeakeasyMetadata()
  headers: OndStatusHeaders;

  @SpeakeasyMetadata()
  security: OndStatusSecurity;
}


export class OndStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ondStatus200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
