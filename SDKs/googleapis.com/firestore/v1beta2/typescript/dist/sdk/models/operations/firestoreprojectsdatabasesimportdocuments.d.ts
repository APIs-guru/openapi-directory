import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesImportDocumentsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesImportDocumentsQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesImportDocumentsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesImportDocumentsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesImportDocumentsSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesImportDocumentsSecurityOption1;
    option2?: FirestoreProjectsDatabasesImportDocumentsSecurityOption2;
}
export declare class FirestoreProjectsDatabasesImportDocumentsRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesImportDocumentsPathParams;
    queryParams: FirestoreProjectsDatabasesImportDocumentsQueryParams;
    request?: shared.GoogleFirestoreAdminV1beta2ImportDocumentsRequest;
    security: FirestoreProjectsDatabasesImportDocumentsSecurity;
}
export declare class FirestoreProjectsDatabasesImportDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
