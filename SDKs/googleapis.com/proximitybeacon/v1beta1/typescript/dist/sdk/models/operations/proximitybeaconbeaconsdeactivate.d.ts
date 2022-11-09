import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsDeactivatePathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsDeactivateQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconBeaconsDeactivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsDeactivateRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsDeactivatePathParams;
    queryParams: ProximitybeaconBeaconsDeactivateQueryParams;
    security: ProximitybeaconBeaconsDeactivateSecurity;
}
export declare class ProximitybeaconBeaconsDeactivateResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
