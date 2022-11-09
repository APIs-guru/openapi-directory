import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangeRecaptchaTokenPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangeRecaptchaTokenQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1betaExchangeRecaptchaTokenRequest;
    security: FirebaseappcheckProjectsAppsExchangeRecaptchaTokenSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaAppCheckToken?: shared.GoogleFirebaseAppcheckV1betaAppCheckToken;
    statusCode: number;
}
