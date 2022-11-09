import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption1;
    option2?: FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurityOption2;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesCollectionGroupsIndexesGetPathParams;
    queryParams: FirestoreProjectsDatabasesCollectionGroupsIndexesGetQueryParams;
    security: FirestoreProjectsDatabasesCollectionGroupsIndexesGetSecurity;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse extends SpeakeasyBase {
    contentType: string;
    googleFirestoreAdminV1beta2Index?: shared.GoogleFirestoreAdminV1beta2Index;
    statusCode: number;
}
