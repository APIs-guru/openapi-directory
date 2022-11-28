import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption1;
    option2?: FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurityOption2;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesCollectionGroupsIndexesCreatePathParams;
    queryParams: FirestoreProjectsDatabasesCollectionGroupsIndexesCreateQueryParams;
    request?: shared.GoogleFirestoreAdminV1beta2Index;
    security: FirestoreProjectsDatabasesCollectionGroupsIndexesCreateSecurity;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
