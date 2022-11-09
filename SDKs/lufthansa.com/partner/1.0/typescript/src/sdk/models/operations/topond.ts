import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TopOndQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" })
  catalogues?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=origin" })
  origin?: string;
}


export class TopOndHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class TopOndSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class TopOndRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: TopOndQueryParams;

  @Metadata()
  headers: TopOndHeaders;

  @Metadata()
  security: TopOndSecurity;
}


export class TopOndResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  topOnd200ApplicationJsonString?: string;
}
