import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProximitybeaconGetEidparamsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ProximitybeaconGetEidparamsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProximitybeaconGetEidparamsRequest extends SpeakeasyBase {
    queryParams: ProximitybeaconGetEidparamsQueryParams;
    security: ProximitybeaconGetEidparamsSecurity;
}
export declare class ProximitybeaconGetEidparamsResponse extends SpeakeasyBase {
    contentType: string;
    ephemeralIdRegistrationParams?: shared.EphemeralIdRegistrationParams;
    statusCode: number;
}
