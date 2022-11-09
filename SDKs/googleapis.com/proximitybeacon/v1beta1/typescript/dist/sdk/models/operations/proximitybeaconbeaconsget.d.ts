import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsGetPathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsGetQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconBeaconsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsGetRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsGetPathParams;
    queryParams: ProximitybeaconBeaconsGetQueryParams;
    security: ProximitybeaconBeaconsGetSecurity;
}
export declare class ProximitybeaconBeaconsGetResponse extends SpeakeasyBase {
    beacon?: shared.Beacon;
    contentType: string;
    statusCode: number;
}
