import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsInstancesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsInstancesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsInstancesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsInstancesListRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsInstancesListPathParams;
    queryParams: NotebooksProjectsLocationsInstancesListQueryParams;
    security: NotebooksProjectsLocationsInstancesListSecurity;
}
export declare class NotebooksProjectsLocationsInstancesListResponse extends SpeakeasyBase {
    contentType: string;
    listInstancesResponse?: shared.ListInstancesResponse;
    statusCode: number;
}
