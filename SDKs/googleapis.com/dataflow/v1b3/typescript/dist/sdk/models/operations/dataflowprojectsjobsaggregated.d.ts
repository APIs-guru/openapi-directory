import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsAggregatedPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum DataflowProjectsJobsAggregatedFilterEnum {
    Unknown = "UNKNOWN",
    All = "ALL",
    Terminated = "TERMINATED",
    Active = "ACTIVE"
}
export declare enum DataflowProjectsJobsAggregatedViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsJobsAggregatedQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: DataflowProjectsJobsAggregatedFilterEnum;
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
    view?: DataflowProjectsJobsAggregatedViewEnum;
}
export declare class DataflowProjectsJobsAggregatedSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsAggregatedSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsAggregatedSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsAggregatedSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsAggregatedSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsAggregatedSecurityOption1;
    option2?: DataflowProjectsJobsAggregatedSecurityOption2;
    option3?: DataflowProjectsJobsAggregatedSecurityOption3;
    option4?: DataflowProjectsJobsAggregatedSecurityOption4;
}
export declare class DataflowProjectsJobsAggregatedRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsAggregatedPathParams;
    queryParams: DataflowProjectsJobsAggregatedQueryParams;
    security: DataflowProjectsJobsAggregatedSecurity;
}
export declare class DataflowProjectsJobsAggregatedResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
