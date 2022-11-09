import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption1;
    option2?: FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurityOption2;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesCollectionGroupsIndexesDeletePathParams;
    queryParams: FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteQueryParams;
    security: FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteSecurity;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
