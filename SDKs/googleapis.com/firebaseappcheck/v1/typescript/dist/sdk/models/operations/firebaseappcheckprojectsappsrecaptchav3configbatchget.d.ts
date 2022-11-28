import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    names?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetPathParams;
    queryParams: FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetQueryParams;
    security: FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetSecurity;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse?: shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaV3ConfigsResponse;
    statusCode: number;
}
