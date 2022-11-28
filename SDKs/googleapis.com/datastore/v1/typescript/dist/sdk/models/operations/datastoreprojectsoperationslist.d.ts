import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastoreProjectsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsOperationsListSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsOperationsListSecurityOption1;
    option2?: DatastoreProjectsOperationsListSecurityOption2;
}
export declare class DatastoreProjectsOperationsListRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsOperationsListPathParams;
    queryParams: DatastoreProjectsOperationsListQueryParams;
    security: DatastoreProjectsOperationsListSecurity;
}
export declare class DatastoreProjectsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
