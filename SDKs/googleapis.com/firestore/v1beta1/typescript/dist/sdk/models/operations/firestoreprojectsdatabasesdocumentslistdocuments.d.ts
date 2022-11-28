import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsListDocumentsPathParams extends SpeakeasyBase {
    collectionId: string;
    parent: string;
}
export declare class FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maskFieldPaths?: string[];
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readTime?: string;
    showMissing?: boolean;
    transaction?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsListDocumentsSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsListDocumentsSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsListDocumentsRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsListDocumentsPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsListDocumentsQueryParams;
    security: FirestoreProjectsDatabasesDocumentsListDocumentsSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsListDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    listDocumentsResponse?: shared.ListDocumentsResponse;
    statusCode: number;
}
