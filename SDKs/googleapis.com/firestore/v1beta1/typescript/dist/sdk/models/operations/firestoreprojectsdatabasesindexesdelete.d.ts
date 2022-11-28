import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesIndexesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesIndexesDeleteQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesIndexesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesIndexesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesIndexesDeleteSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesIndexesDeleteSecurityOption1;
    option2?: FirestoreProjectsDatabasesIndexesDeleteSecurityOption2;
}
export declare class FirestoreProjectsDatabasesIndexesDeleteRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesIndexesDeletePathParams;
    queryParams: FirestoreProjectsDatabasesIndexesDeleteQueryParams;
    security: FirestoreProjectsDatabasesIndexesDeleteSecurity;
}
export declare class FirestoreProjectsDatabasesIndexesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
