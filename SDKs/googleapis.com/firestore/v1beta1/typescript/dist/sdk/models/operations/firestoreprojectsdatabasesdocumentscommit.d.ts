import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsCommitPathParams extends SpeakeasyBase {
    database: string;
}
export declare class FirestoreProjectsDatabasesDocumentsCommitQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsCommitSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsCommitSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsCommitSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsCommitSecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsCommitSecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsCommitRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsCommitPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsCommitQueryParams;
    request?: shared.CommitRequest;
    security: FirestoreProjectsDatabasesDocumentsCommitSecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsCommitResponse extends SpeakeasyBase {
    commitResponse?: shared.CommitResponse;
    contentType: string;
    statusCode: number;
}
