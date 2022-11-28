import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsJobsExecutionsTasksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsJobsExecutionsTasksListQueryParams extends SpeakeasyBase {
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
    showDeleted?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RunProjectsLocationsJobsExecutionsTasksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsJobsExecutionsTasksListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsJobsExecutionsTasksListPathParams;
    queryParams: RunProjectsLocationsJobsExecutionsTasksListQueryParams;
    security: RunProjectsLocationsJobsExecutionsTasksListSecurity;
}
export declare class RunProjectsLocationsJobsExecutionsTasksListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRunV2ListTasksResponse?: shared.GoogleCloudRunV2ListTasksResponse;
    statusCode: number;
}
