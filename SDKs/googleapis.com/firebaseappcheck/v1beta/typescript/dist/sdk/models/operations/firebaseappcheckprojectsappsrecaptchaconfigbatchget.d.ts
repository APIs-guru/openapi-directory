import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetPathParams;
    queryParams: FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetQueryParams;
    security: FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetSecurity;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse?: shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse;
    statusCode: number;
}
