import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReferencesAircraftByAircraftCodeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aircraftCode" })
  aircraftCode: string;
}


export class ReferencesAircraftByAircraftCodeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: string;
}


export class ReferencesAircraftByAircraftCodeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesAircraftByAircraftCodeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesAircraftByAircraftCodeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReferencesAircraftByAircraftCodeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ReferencesAircraftByAircraftCodeGetQueryParams;

  @SpeakeasyMetadata()
  headers: ReferencesAircraftByAircraftCodeGetHeaders;

  @SpeakeasyMetadata()
  security: ReferencesAircraftByAircraftCodeGetSecurity;
}


export class ReferencesAircraftByAircraftCodeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  referencesAircraftByAircraftCodeGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
