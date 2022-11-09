import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsIosAppsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsIosAppsListQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsIosAppsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsIosAppsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsIosAppsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsIosAppsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsIosAppsListSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsIosAppsListSecurityOption1;
    option2?: FirebaseProjectsIosAppsListSecurityOption2;
    option3?: FirebaseProjectsIosAppsListSecurityOption3;
    option4?: FirebaseProjectsIosAppsListSecurityOption4;
}
export declare class FirebaseProjectsIosAppsListRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsIosAppsListPathParams;
    queryParams: FirebaseProjectsIosAppsListQueryParams;
    security: FirebaseProjectsIosAppsListSecurity;
}
export declare class FirebaseProjectsIosAppsListResponse extends SpeakeasyBase {
    contentType: string;
    listIosAppsResponse?: shared.ListIosAppsResponse;
    statusCode: number;
}
