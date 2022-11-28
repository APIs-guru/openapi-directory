import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsBatchGetPathParams extends SpeakeasyBase {
    database: string;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchGetQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchGetSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsBatchGetSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchGetRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsBatchGetPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsBatchGetQueryParams;
    request?: shared.BatchGetDocumentsRequest;
    security: FirestoreProjectsDatabasesDocumentsBatchGetSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchGetResponse extends SpeakeasyBase {
    batchGetDocumentsResponse?: shared.BatchGetDocumentsResponse;
    contentType: string;
    statusCode: number;
}
