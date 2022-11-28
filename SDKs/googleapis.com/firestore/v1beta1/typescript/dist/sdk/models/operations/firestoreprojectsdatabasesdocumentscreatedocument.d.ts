import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams extends SpeakeasyBase {
    collectionId: string;
    parent: string;
}
export declare class FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    documentId?: string;
    fields?: string;
    key?: string;
    maskFieldPaths?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsCreateDocumentSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsCreateDocumentRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsCreateDocumentPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsCreateDocumentQueryParams;
    request?: shared.Document;
    security: FirestoreProjectsDatabasesDocumentsCreateDocumentSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsCreateDocumentResponse extends SpeakeasyBase {
    contentType: string;
    document?: shared.Document;
    statusCode: number;
}
