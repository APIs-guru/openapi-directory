import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesDocumentsRunQueryPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesDocumentsRunQueryQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesDocumentsRunQuerySecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption1;
    option2?: FirestoreProjectsDatabasesDocumentsRunQuerySecurityOption2;
}
export declare class FirestoreProjectsDatabasesDocumentsRunQueryRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesDocumentsRunQueryPathParams;
    queryParams: FirestoreProjectsDatabasesDocumentsRunQueryQueryParams;
    request?: shared.RunQueryRequest;
    security: FirestoreProjectsDatabasesDocumentsRunQuerySecurity;
}
export declare class FirestoreProjectsDatabasesDocumentsRunQueryResponse extends SpeakeasyBase {
    contentType: string;
    runQueryResponse?: shared.RunQueryResponse;
    statusCode: number;
}
