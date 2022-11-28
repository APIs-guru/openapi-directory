import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    databaseId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCreateSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesCreateSecurityOption1;
    option2?: FirestoreProjectsDatabasesCreateSecurityOption2;
}
export declare class FirestoreProjectsDatabasesCreateRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesCreatePathParams;
    queryParams: FirestoreProjectsDatabasesCreateQueryParams;
    request?: shared.GoogleFirestoreAdminV1DatabaseInput;
    security: FirestoreProjectsDatabasesCreateSecurity;
}
export declare class FirestoreProjectsDatabasesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
