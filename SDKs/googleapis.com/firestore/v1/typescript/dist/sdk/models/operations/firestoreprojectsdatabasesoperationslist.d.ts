import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirestoreProjectsDatabasesOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class FirestoreProjectsDatabasesOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class FirestoreProjectsDatabasesOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FirestoreProjectsDatabasesOperationsListSecurity extends SpeakeasyBase {
    option1?: FirestoreProjectsDatabasesOperationsListSecurityOption1;
    option2?: FirestoreProjectsDatabasesOperationsListSecurityOption2;
}
export declare class FirestoreProjectsDatabasesOperationsListRequest extends SpeakeasyBase {
    pathParams: FirestoreProjectsDatabasesOperationsListPathParams;
    queryParams: FirestoreProjectsDatabasesOperationsListQueryParams;
    security: FirestoreProjectsDatabasesOperationsListSecurity;
}
export declare class FirestoreProjectsDatabasesOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
