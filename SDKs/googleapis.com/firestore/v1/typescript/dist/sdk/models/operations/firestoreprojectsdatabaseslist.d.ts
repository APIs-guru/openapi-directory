import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesListSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesListSecurityOption1;
    option2?: FirestoreProjectsDatabasesListSecurityOption2;
}
export declare class FirestoreProjectsDatabasesListRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesListPathParams;
    queryParams: FirestoreProjectsDatabasesListQueryParams;
    security: FirestoreProjectsDatabasesListSecurity;
}
export declare class FirestoreProjectsDatabasesListResponse extends SpeakeasyBase {
    contentType: string;
    googleFirestoreAdminV1ListDatabasesResponse?: shared.GoogleFirestoreAdminV1ListDatabasesResponse;
    statusCode: number;
}
