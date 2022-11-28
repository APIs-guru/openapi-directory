import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetPathParams;
    queryParams: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetQueryParams;
    security: FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetSecurity;
}
export declare class FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse?: shared.GoogleFirebaseAppcheckV1BatchGetRecaptchaEnterpriseConfigsResponse;
    statusCode: number;
}
