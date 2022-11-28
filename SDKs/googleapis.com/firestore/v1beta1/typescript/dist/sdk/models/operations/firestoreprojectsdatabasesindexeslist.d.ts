import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesIndexesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesIndexesListQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesIndexesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesIndexesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesIndexesListSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesIndexesListSecurityOption1;
    option2?: FirestoreProjectsDatabasesIndexesListSecurityOption2;
}
export declare class FirestoreProjectsDatabasesIndexesListRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesIndexesListPathParams;
    queryParams: FirestoreProjectsDatabasesIndexesListQueryParams;
    security: FirestoreProjectsDatabasesIndexesListSecurity;
}
export declare class FirestoreProjectsDatabasesIndexesListResponse extends SpeakeasyBase {
    contentType: string;
    googleFirestoreAdminV1beta1ListIndexesResponse?: shared.GoogleFirestoreAdminV1beta1ListIndexesResponse;
    statusCode: number;
}
