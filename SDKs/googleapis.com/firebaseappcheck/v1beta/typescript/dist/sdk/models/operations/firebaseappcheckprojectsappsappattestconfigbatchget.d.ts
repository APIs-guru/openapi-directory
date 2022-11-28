import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetPathParams;
    queryParams: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetQueryParams;
    security: FirebaseappcheckProjectsAppsAppAttestConfigBatchGetSecurity;
}
export declare class FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse?: shared.GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse;
    statusCode: number;
}
