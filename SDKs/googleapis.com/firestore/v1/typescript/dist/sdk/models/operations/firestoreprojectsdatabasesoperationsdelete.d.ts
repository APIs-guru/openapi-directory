import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesOperationsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    currentDocumentExists?: boolean;
    currentDocumentUpdateTime?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesOperationsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesOperationsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesOperationsDeleteSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesOperationsDeleteSecurityOption1;
    option2?: FirestoreProjectsDatabasesOperationsDeleteSecurityOption2;
}
export declare class FirestoreProjectsDatabasesOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesOperationsDeletePathParams;
    queryParams: FirestoreProjectsDatabasesOperationsDeleteQueryParams;
    security: FirestoreProjectsDatabasesOperationsDeleteSecurity;
}
export declare class FirestoreProjectsDatabasesOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
