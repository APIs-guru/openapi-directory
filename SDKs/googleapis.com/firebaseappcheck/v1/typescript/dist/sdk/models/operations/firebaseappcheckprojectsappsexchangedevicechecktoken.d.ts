import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1ExchangeDeviceCheckTokenRequest;
    security: FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1AppCheckToken?: shared.GoogleFirebaseAppcheckV1AppCheckToken;
    statusCode: number;
}
