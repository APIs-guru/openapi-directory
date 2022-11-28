import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams extends SpeakeasyBase {
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
export declare class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity extends SpeakeasyBase {
    option1?: FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption1;
    option2?: FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurityOption2;
}
export declare class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest extends SpeakeasyBase {
    pathParams: FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetPathParams;
    queryParams: FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetQueryParams;
    security: FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetSecurity;
}
export declare class FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse?: shared.GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse;
    statusCode: number;
}
