import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsWebAppsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirebaseProjectsWebAppsListQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsWebAppsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsWebAppsListSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsWebAppsListSecurityOption1;
    option2?: FirebaseProjectsWebAppsListSecurityOption2;
    option3?: FirebaseProjectsWebAppsListSecurityOption3;
    option4?: FirebaseProjectsWebAppsListSecurityOption4;
}
export declare class FirebaseProjectsWebAppsListRequest extends SpeakeasyBase {
    pathParams: FirebaseProjectsWebAppsListPathParams;
    queryParams: FirebaseProjectsWebAppsListQueryParams;
    security: FirebaseProjectsWebAppsListSecurity;
}
export declare class FirebaseProjectsWebAppsListResponse extends SpeakeasyBase {
    contentType: string;
    listWebAppsResponse?: shared.ListWebAppsResponse;
    statusCode: number;
}
