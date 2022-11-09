import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetPathParams;
    queryParams: FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetQueryParams;
    security: FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetSecurity;
}
export declare class FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse?: shared.GoogleFirebaseAppcheckV1BatchGetSafetyNetConfigsResponse;
    statusCode: number;
}
