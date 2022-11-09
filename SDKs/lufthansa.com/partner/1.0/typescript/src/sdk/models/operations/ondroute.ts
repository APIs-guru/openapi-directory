import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OndRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class OndRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OndRouteHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OndRouteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OndRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OndRoutePathParams;

  @Metadata()
  queryParams: OndRouteQueryParams;

  @Metadata()
  headers: OndRouteHeaders;

  @Metadata()
  security: OndRouteSecurity;
}


export class OndRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ondRoute200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
