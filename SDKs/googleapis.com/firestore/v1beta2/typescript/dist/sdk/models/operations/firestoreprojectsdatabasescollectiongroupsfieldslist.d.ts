import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption1;
    option2?: FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurityOption2;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesCollectionGroupsFieldsListPathParams;
    queryParams: FirestoreProjectsDatabasesCollectionGroupsFieldsListQueryParams;
    security: FirestoreProjectsDatabasesCollectionGroupsFieldsListSecurity;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse extends SpeakeasyBase {
    contentType: string;
    googleFirestoreAdminV1beta2ListFieldsResponse?: shared.GoogleFirestoreAdminV1beta2ListFieldsResponse;
    statusCode: number;
}
