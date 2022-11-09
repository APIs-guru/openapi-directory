import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1betaExchangePlayIntegrityTokenRequest;
    security: FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaAppCheckToken?: shared.GoogleFirebaseAppcheckV1betaAppCheckToken;
    statusCode: number;
}
