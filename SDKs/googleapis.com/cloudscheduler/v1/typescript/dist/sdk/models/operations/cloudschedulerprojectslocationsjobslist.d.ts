import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudschedulerProjectsLocationsJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudschedulerProjectsLocationsJobsListQueryParams extends SpeakeasyBase {
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
export declare class CloudschedulerProjectsLocationsJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudschedulerProjectsLocationsJobsListRequest extends SpeakeasyBase {
    pathParams: CloudschedulerProjectsLocationsJobsListPathParams;
    queryParams: CloudschedulerProjectsLocationsJobsListQueryParams;
    security: CloudschedulerProjectsLocationsJobsListSecurity;
}
export declare class CloudschedulerProjectsLocationsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
