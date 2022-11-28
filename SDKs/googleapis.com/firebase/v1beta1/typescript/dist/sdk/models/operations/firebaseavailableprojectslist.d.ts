import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirebaseAvailableProjectsListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirebaseAvailableProjectsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseAvailableProjectsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseAvailableProjectsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseAvailableProjectsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirebaseAvailableProjectsListSecurity extends SpeakeasyBase {
    option1?: FirebaseAvailableProjectsListSecurityOption1;
    option2?: FirebaseAvailableProjectsListSecurityOption2;
    option3?: FirebaseAvailableProjectsListSecurityOption3;
    option4?: FirebaseAvailableProjectsListSecurityOption4;
}
export declare class FirebaseAvailableProjectsListRequest extends SpeakeasyBase {
    queryParams: FirebaseAvailableProjectsListQueryParams;
    security: FirebaseAvailableProjectsListSecurity;
}
export declare class FirebaseAvailableProjectsListResponse extends SpeakeasyBase {
    contentType: string;
    listAvailableProjectsResponse?: shared.ListAvailableProjectsResponse;
    statusCode: number;
}
