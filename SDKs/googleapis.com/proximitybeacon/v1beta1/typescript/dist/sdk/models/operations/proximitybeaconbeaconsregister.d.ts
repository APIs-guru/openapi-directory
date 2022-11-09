import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconBeaconsRegisterQueryParams extends SpeakeasyBase {
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
export declare class ProximitybeaconBeaconsRegisterSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconBeaconsRegisterRequest extends SpeakeasyBase {
    queryParams: ProximitybeaconBeaconsRegisterQueryParams;
    request?: shared.Beacon;
    security: ProximitybeaconBeaconsRegisterSecurity;
}
export declare class ProximitybeaconBeaconsRegisterResponse extends SpeakeasyBase {
    beacon?: shared.Beacon;
    contentType: string;
    statusCode: number;
}
