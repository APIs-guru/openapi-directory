import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesExportDocumentsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesExportDocumentsQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesExportDocumentsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesExportDocumentsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesExportDocumentsSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesExportDocumentsSecurityOption1;
    option2?: FirestoreProjectsDatabasesExportDocumentsSecurityOption2;
}
export declare class FirestoreProjectsDatabasesExportDocumentsRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesExportDocumentsPathParams;
    queryParams: FirestoreProjectsDatabasesExportDocumentsQueryParams;
    request?: shared.GoogleFirestoreAdminV1beta1ExportDocumentsRequest;
    security: FirestoreProjectsDatabasesExportDocumentsSecurity;
}
export declare class FirestoreProjectsDatabasesExportDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
