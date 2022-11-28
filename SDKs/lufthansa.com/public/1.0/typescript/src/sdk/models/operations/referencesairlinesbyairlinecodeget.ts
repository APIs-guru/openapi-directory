import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReferencesAirlinesByAirlineCodeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=airlineCode" })
  airlineCode: string;
}


export class ReferencesAirlinesByAirlineCodeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesAirlinesByAirlineCodeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesAirlinesByAirlineCodeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesAirlinesByAirlineCodeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReferencesAirlinesByAirlineCodeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ReferencesAirlinesByAirlineCodeGetQueryParams;

  @SpeakeasyMetadata()
  headers: ReferencesAirlinesByAirlineCodeGetHeaders;

  @SpeakeasyMetadata()
  security: ReferencesAirlinesByAirlineCodeGetSecurity;
}


export class ReferencesAirlinesByAirlineCodeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  referencesAirlinesByAirlineCodeGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
