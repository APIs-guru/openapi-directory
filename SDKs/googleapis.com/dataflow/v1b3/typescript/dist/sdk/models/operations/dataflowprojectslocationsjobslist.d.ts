import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsListPathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare enum DataflowProjectsLocationsJobsListFilterEnum {
    Unknown = "UNKNOWN",
    All = "ALL",
    Terminated = "TERMINATED",
    Active = "ACTIVE"
}
export declare enum DataflowProjectsLocationsJobsListViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsLocationsJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: DataflowProjectsLocationsJobsListFilterEnum;
    key?: string;
    name?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DataflowProjectsLocationsJobsListViewEnum;
}
export declare class DataflowProjectsLocationsJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsListSecurityOption1;
    option2?: DataflowProjectsLocationsJobsListSecurityOption2;
    option3?: DataflowProjectsLocationsJobsListSecurityOption3;
    option4?: DataflowProjectsLocationsJobsListSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsListRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsListPathParams;
    queryParams: DataflowProjectsLocationsJobsListQueryParams;
    security: DataflowProjectsLocationsJobsListSecurity;
}
export declare class DataflowProjectsLocationsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
