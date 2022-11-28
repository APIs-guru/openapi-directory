import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaEnterpriseTokenRequest;
    security: FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1AppCheckToken?: shared.GoogleFirebaseAppcheckV1AppCheckToken;
    statusCode: number;
}
