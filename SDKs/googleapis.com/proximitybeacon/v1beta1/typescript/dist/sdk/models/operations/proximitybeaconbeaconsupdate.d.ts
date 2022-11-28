import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsUpdatePathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProximitybeaconBeaconsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsUpdateRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsUpdatePathParams;
    queryParams: ProximitybeaconBeaconsUpdateQueryParams;
    request?: shared.Beacon;
    security: ProximitybeaconBeaconsUpdateSecurity;
}
export declare class ProximitybeaconBeaconsUpdateResponse extends SpeakeasyBase {
    beacon?: shared.Beacon;
    contentType: string;
    statusCode: number;
}
