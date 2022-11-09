import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OndStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=new-routes" })
  newRoutes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=old-routes" })
  oldRoutes?: string;
}


export class OndStatusHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OndStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OndStatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OndStatusQueryParams;

  @Metadata()
  headers: OndStatusHeaders;

  @Metadata()
  security: OndStatusSecurity;
}


export class OndStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ondStatus200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
