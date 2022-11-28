import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams extends SpeakeasyBase {
    database: string;
}
export declare class FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsBeginTransactionSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsBeginTransactionRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsBeginTransactionPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsBeginTransactionQueryParams;
    request?: shared.BeginTransactionRequest;
    security: FirestoreProjectsDatabasesDocumentsBeginTransactionSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsBeginTransactionResponse extends SpeakeasyBase {
    beginTransactionResponse?: shared.BeginTransactionResponse;
    contentType: string;
    statusCode: number;
}
