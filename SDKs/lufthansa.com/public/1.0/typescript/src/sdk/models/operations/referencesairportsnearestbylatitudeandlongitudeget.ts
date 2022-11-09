import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=latitude" })
  latitude: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=longitude" })
  longitude: number;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams;

  @Metadata()
  queryParams: ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams;

  @Metadata()
  headers: ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders;

  @Metadata()
  security: ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
