import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetPathParams;
    queryParams: FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetQueryParams;
    security: FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetSecurity;
}
export declare class FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse?: shared.GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse;
    statusCode: number;
}
