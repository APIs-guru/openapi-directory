import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsActivatePathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsActivateQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconBeaconsActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsActivateRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsActivatePathParams;
    queryParams: ProximitybeaconBeaconsActivateQueryParams;
    security: ProximitybeaconBeaconsActivateSecurity;
}
export declare class ProximitybeaconBeaconsActivateResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
