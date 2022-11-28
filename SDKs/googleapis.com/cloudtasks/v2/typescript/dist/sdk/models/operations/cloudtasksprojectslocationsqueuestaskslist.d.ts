import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudtasksProjectsLocationsQueuesTasksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class CloudtasksProjectsLocationsQueuesTasksListQueryParams extends SpeakeasyBase {
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
    responseView?: CloudtasksProjectsLocationsQueuesTasksListResponseViewEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudtasksProjectsLocationsQueuesTasksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudtasksProjectsLocationsQueuesTasksListRequest extends SpeakeasyBase {
    pathParams: CloudtasksProjectsLocationsQueuesTasksListPathParams;
    queryParams: CloudtasksProjectsLocationsQueuesTasksListQueryParams;
    security: CloudtasksProjectsLocationsQueuesTasksListSecurity;
}
export declare class CloudtasksProjectsLocationsQueuesTasksListResponse extends SpeakeasyBase {
    contentType: string;
    listTasksResponse?: shared.ListTasksResponse;
    statusCode: number;
}
