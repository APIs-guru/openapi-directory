import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsGetPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare enum DataflowProjectsJobsGetViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsJobsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DataflowProjectsJobsGetViewEnum;
}
export declare class DataflowProjectsJobsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsGetSecurityOption1;
    option2?: DataflowProjectsJobsGetSecurityOption2;
    option3?: DataflowProjectsJobsGetSecurityOption3;
    option4?: DataflowProjectsJobsGetSecurityOption4;
}
export declare class DataflowProjectsJobsGetRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsGetPathParams;
    queryParams: DataflowProjectsJobsGetQueryParams;
    security: DataflowProjectsJobsGetSecurity;
}
export declare class DataflowProjectsJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
