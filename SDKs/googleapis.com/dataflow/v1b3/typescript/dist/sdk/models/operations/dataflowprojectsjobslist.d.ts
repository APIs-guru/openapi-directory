import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsListPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum DataflowProjectsJobsListFilterEnum {
    Unknown = "UNKNOWN",
    All = "ALL",
    Terminated = "TERMINATED",
    Active = "ACTIVE"
}
export declare enum DataflowProjectsJobsListViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: DataflowProjectsJobsListFilterEnum;
    key?: string;
    location?: string;
    name?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DataflowProjectsJobsListViewEnum;
}
export declare class DataflowProjectsJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsListSecurityOption1;
    option2?: DataflowProjectsJobsListSecurityOption2;
    option3?: DataflowProjectsJobsListSecurityOption3;
    option4?: DataflowProjectsJobsListSecurityOption4;
}
export declare class DataflowProjectsJobsListRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsListPathParams;
    queryParams: DataflowProjectsJobsListQueryParams;
    security: DataflowProjectsJobsListSecurity;
}
export declare class DataflowProjectsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
