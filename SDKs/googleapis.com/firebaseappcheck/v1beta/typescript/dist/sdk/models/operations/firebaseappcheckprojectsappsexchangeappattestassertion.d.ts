import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams extends SpeakeasyBase {
    app: string;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsExchangeAppAttestAssertionPathParams;
    queryParams: FirebaseappcheckProjectsAppsExchangeAppAttestAssertionQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAssertionRequest;
    security: FirebaseappcheckProjectsAppsExchangeAppAttestAssertionSecurity;
}
export declare class FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaAppCheckToken?: shared.GoogleFirebaseAppcheckV1betaAppCheckToken;
    statusCode: number;
}
