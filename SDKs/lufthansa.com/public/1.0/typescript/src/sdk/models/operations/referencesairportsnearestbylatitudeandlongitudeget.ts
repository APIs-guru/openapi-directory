import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=longitude" })
  longitude: number;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" })
  accept: string;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  auth: shared.SchemeAuth;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams;

  @SpeakeasyMetadata()
  headers: ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders;

  @SpeakeasyMetadata()
  security: ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity;
}


export class ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
