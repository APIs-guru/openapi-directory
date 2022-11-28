import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption1;
    option2?: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurityOption2;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchPathParams;
    queryParams: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchQueryParams;
    request?: shared.GoogleFirestoreAdminV1beta2Field;
    security: FirestoreProjectsDatabasesCollectionGroupsFieldsPatchSecurity;
}
export declare class FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
