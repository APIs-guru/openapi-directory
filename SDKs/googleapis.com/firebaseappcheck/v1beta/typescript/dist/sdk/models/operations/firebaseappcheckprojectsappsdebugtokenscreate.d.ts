import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsDebugTokensCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensCreateSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsDebugTokensCreateSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensCreateRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsDebugTokensCreatePathParams;
    queryParams: FirebaseappcheckProjectsAppsDebugTokensCreateQueryParams;
    request?: shared.GoogleFirebaseAppcheckV1betaDebugToken;
    security: FirebaseappcheckProjectsAppsDebugTokensCreateSecurity;
}
export declare class FirebaseappcheckProjectsAppsDebugTokensCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaDebugToken?: shared.GoogleFirebaseAppcheckV1betaDebugToken;
    statusCode: number;
}
