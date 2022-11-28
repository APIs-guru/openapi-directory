import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsBatchWritePathParams extends SpeakeasyBase {
    database: string;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchWriteSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsBatchWriteSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchWriteRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsBatchWritePathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsBatchWriteQueryParams;
    request?: shared.BatchWriteRequest;
    security: FirestoreProjectsDatabasesDocumentsBatchWriteSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsBatchWriteResponse extends SpeakeasyBase {
    batchWriteResponse?: shared.BatchWriteResponse;
    contentType: string;
    statusCode: number;
}
