import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption1;
    option2?: FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurityOption2;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesCollectionGroupsIndexesListPathParams;
    queryParams: FirestoreProjectsDatabasesCollectionGroupsIndexesListQueryParams;
    security: FirestoreProjectsDatabasesCollectionGroupsIndexesListSecurity;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse extends SpeakeasyBase {
    contentType: string;
    googleFirestoreAdminV1ListIndexesResponse?: shared.GoogleFirestoreAdminV1ListIndexesResponse;
    statusCode: number;
}
