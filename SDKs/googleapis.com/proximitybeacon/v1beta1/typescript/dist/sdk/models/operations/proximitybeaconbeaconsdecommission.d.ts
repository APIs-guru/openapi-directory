import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsDecommissionPathParams extends SpeakeasyBase {
    beaconName: string;
}
export declare class ProximitybeaconBeaconsDecommissionQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconBeaconsDecommissionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsDecommissionRequest extends SpeakeasyBase {
    pathParams: ProximitybeaconBeaconsDecommissionPathParams;
    queryParams: ProximitybeaconBeaconsDecommissionQueryParams;
    security: ProximitybeaconBeaconsDecommissionSecurity;
}
export declare class ProximitybeaconBeaconsDecommissionResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
