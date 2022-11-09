import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeDebugTokenSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeDebugTokenRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangeDebugTokenPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangeDebugTokenQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1betaExchangeDebugTokenRequest;
    security: FirebaseappcheckProjectsAppsExchangeDebugTokenSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangeDebugTokenResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaAppCheckToken?: shared.GoogleFirebaseAppcheckV1betaAppCheckToken;
    statusCode: number;
}
