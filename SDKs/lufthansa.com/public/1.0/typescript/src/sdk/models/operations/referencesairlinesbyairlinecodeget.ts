import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReferencesAirlinesByAirlineCodeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=airlineCode" })
  airlineCode: string;
}


export class ReferencesAirlinesByAirlineCodeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesAirlinesByAirlineCodeGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesAirlinesByAirlineCodeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesAirlinesByAirlineCodeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReferencesAirlinesByAirlineCodeGetPathParams;

  @Metadata()
  queryParams: ReferencesAirlinesByAirlineCodeGetQueryParams;

  @Metadata()
  headers: ReferencesAirlinesByAirlineCodeGetHeaders;

  @Metadata()
  security: ReferencesAirlinesByAirlineCodeGetSecurity;
}


export class ReferencesAirlinesByAirlineCodeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  referencesAirlinesByAirlineCodeGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
