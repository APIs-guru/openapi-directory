import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    currentDocumentExists?: boolean;
    currentDocumentUpdateTime?: string;
    fields?: string;
    key?: string;
    maskFieldPaths?: string[];
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMaskFieldPaths?: string[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsPatchSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsPatchSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsPatchPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsPatchQueryParams;
    request?: shared.Document;
    security: FirestoreProjectsDatabasesDocumentsPatchSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    document?: shared.Document;
    statusCode: number;
}
