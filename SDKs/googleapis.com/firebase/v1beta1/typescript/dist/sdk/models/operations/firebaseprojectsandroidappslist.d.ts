import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsAndroidAppsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsAndroidAppsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebaseProjectsAndroidAppsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsAndroidAppsListSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsAndroidAppsListSecurityOption1;
    option2?: FirebaseProjectsAndroidAppsListSecurityOption2;
    option3?: FirebaseProjectsAndroidAppsListSecurityOption3;
    option4?: FirebaseProjectsAndroidAppsListSecurityOption4;
}
export declare class FirebaseProjectsAndroidAppsListRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsAndroidAppsListPathParams;
    queryParams: FirebaseProjectsAndroidAppsListQueryParams;
    security: FirebaseProjectsAndroidAppsListSecurity;
}
export declare class FirebaseProjectsAndroidAppsListResponse extends SpeakeasyBase {
    contentType: string;
    listAndroidAppsResponse?: shared.ListAndroidAppsResponse;
    statusCode: number;
}
