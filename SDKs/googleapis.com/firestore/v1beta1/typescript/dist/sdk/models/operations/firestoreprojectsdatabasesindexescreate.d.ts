import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesIndexesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FirestoreProjectsDatabasesIndexesCreateQueryParams extends SpeakeasyBase {
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
export declare class FirestoreProjectsDatabasesIndexesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesIndexesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesIndexesCreateSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesIndexesCreateSecurityOption1;
    option2?: FirestoreProjectsDatabasesIndexesCreateSecurityOption2;
}
export declare class FirestoreProjectsDatabasesIndexesCreateRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesIndexesCreatePathParams;
    queryParams: FirestoreProjectsDatabasesIndexesCreateQueryParams;
    request?: shared.GoogleFirestoreAdminV1beta1Index;
    security: FirestoreProjectsDatabasesIndexesCreateSecurity;
}
export declare class FirestoreProjectsDatabasesIndexesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
