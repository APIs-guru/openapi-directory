import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1ExchangeRecaptchaV3TokenRequest;
    security: FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1AppCheckToken?: shared.GoogleFirebaseAppcheckV1AppCheckToken;
    statusCode: number;
}
