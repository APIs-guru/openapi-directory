import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunProjectsLocationsJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RunProjectsLocationsJobsListQueryParams extends SpeakeasyBase {
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
export declare class RunProjectsLocationsJobsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RunProjectsLocationsJobsListRequest extends SpeakeasyBase {
    pathParams: RunProjectsLocationsJobsListPathParams;
    queryParams: RunProjectsLocationsJobsListQueryParams;
    security: RunProjectsLocationsJobsListSecurity;
}
export declare class RunProjectsLocationsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRunV2ListJobsResponse?: shared.GoogleCloudRunV2ListJobsResponse;
    statusCode: number;
}
