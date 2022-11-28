import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsRollbackPathParams extends SpeakeasyBase {
    database: string;
}
export declare class FirestoreProjectsDatabasesDocumentsRollbackQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsRollbackSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsRollbackSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsRollbackSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsRollbackRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsRollbackPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsRollbackQueryParams;
    request?: shared.RollbackRequest;
    security: FirestoreProjectsDatabasesDocumentsRollbackSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsRollbackResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
