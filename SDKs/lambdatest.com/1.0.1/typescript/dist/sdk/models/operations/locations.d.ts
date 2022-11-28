import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LocationsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class LocationsRequest extends SpeakeasyBase {
    security: LocationsSecurity;
}
export declare class LocationsResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    statusCode: number;
    locations?: shared.Locations;
}
