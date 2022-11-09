import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirebaseProjectsListQueryParams extends SpeakeasyBase {
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
export declare class FirebaseProjectsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseProjectsListSecurity extends SpeakeasyBase {
    option1?: FirebaseProjectsListSecurityOption1;
    option2?: FirebaseProjectsListSecurityOption2;
    option3?: FirebaseProjectsListSecurityOption3;
    option4?: FirebaseProjectsListSecurityOption4;
}
export declare class FirebaseProjectsListRequest extends SpeakeasyBase {
    queryParams: FirebaseProjectsListQueryParams;
    security: FirebaseProjectsListSecurity;
}
export declare class FirebaseProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    listFirebaseProjectsResponse?: shared.ListFirebaseProjectsResponse;
    statusCode: number;
}
