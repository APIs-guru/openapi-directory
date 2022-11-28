import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastoreProjectsIndexesListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DatastoreProjectsIndexesListQueryParams extends SpeakeasyBase {
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
export declare class DatastoreProjectsIndexesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsIndexesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastoreProjectsIndexesListSecurity extends SpeakeasyBase {
    option1?: DatastoreProjectsIndexesListSecurityOption1;
    option2?: DatastoreProjectsIndexesListSecurityOption2;
}
export declare class DatastoreProjectsIndexesListRequest extends SpeakeasyBase {
    pathParams: DatastoreProjectsIndexesListPathParams;
    queryParams: DatastoreProjectsIndexesListQueryParams;
    security: DatastoreProjectsIndexesListSecurity;
}
export declare class DatastoreProjectsIndexesListResponse extends SpeakeasyBase {
    contentType: string;
    googleDatastoreAdminV1ListIndexesResponse?: shared.GoogleDatastoreAdminV1ListIndexesResponse;
    statusCode: number;
}
