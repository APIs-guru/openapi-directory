import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReferencesAircraftByAircraftCodeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=aircraftCode" })
  aircraftCode: string;
}


export class ReferencesAircraftByAircraftCodeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesAircraftByAircraftCodeGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesAircraftByAircraftCodeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesAircraftByAircraftCodeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReferencesAircraftByAircraftCodeGetPathParams;

  @Metadata()
  queryParams: ReferencesAircraftByAircraftCodeGetQueryParams;

  @Metadata()
  headers: ReferencesAircraftByAircraftCodeGetHeaders;

  @Metadata()
  security: ReferencesAircraftByAircraftCodeGetSecurity;
}


export class ReferencesAircraftByAircraftCodeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  referencesAircraftByAircraftCodeGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
