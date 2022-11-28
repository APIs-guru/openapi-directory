import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsWebAppsGetConfigPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirebaseProjectsWebAppsGetConfigQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsWebAppsGetConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsGetConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsGetConfigSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsGetConfigSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsGetConfigSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsWebAppsGetConfigSecurityOption1;
    option2?: FirebaseProjectsWebAppsGetConfigSecurityOption2;
    option3?: FirebaseProjectsWebAppsGetConfigSecurityOption3;
    option4?: FirebaseProjectsWebAppsGetConfigSecurityOption4;
}
export declare class FirebaseProjectsWebAppsGetConfigRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsWebAppsGetConfigPathParams;
    queryParams: FirebaseProjectsWebAppsGetConfigQueryParams;
    security: FirebaseProjectsWebAppsGetConfigSecurity;
}
export declare class FirebaseProjectsWebAppsGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webAppConfig?: shared.WebAppConfig;
}
