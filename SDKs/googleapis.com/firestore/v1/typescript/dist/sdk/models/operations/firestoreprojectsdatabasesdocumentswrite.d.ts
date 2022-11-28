import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsWritePathParams extends SpeakeasyBase {
    database: string;
}
export declare class FirestoreProjectsDatabasesDocumentsWriteQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsWriteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsWriteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsWriteSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsWriteSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsWriteSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsWriteRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsWritePathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsWriteQueryParams;
    request?: shared.WriteRequest;
    security: FirestoreProjectsDatabasesDocumentsWriteSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsWriteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    writeResponse?: shared.WriteResponse;
}
