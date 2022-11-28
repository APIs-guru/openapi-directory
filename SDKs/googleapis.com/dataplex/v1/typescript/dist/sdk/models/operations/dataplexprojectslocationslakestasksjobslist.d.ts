import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesTasksJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesTasksJobsListQueryParams extends SpeakeasyBase {
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
export declare class DataplexProjectsLocationsLakesTasksJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesTasksJobsListRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesTasksJobsListPathParams;
    queryParams: DataplexProjectsLocationsLakesTasksJobsListQueryParams;
    security: DataplexProjectsLocationsLakesTasksJobsListSecurity;
}
export declare class DataplexProjectsLocationsLakesTasksJobsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1ListJobsResponse?: shared.GoogleCloudDataplexV1ListJobsResponse;
    statusCode: number;
}
