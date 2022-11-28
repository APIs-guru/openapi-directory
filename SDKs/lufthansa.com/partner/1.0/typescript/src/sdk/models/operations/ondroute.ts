import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OndRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=origin" })
  origin: string;
}


export class OndRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class OndRouteHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class OndRouteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class OndRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OndRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: OndRouteQueryParams;

  @SpeakeasyMetadata()
  headers: OndRouteHeaders;

  @SpeakeasyMetadata()
  security: OndRouteSecurity;
}


export class OndRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ondRoute200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
