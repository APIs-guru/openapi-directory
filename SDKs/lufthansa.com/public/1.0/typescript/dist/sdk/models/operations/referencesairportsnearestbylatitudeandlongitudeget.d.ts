import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams extends SpeakeasyBase {
    latitude: number;
    longitude: number;
}
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest extends SpeakeasyBase {
    pathParams: ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams;
    queryParams: ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams;
    headers: ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders;
    security: ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity;
}
export declare class ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse extends SpeakeasyBase {
    contentType: string;
    referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
