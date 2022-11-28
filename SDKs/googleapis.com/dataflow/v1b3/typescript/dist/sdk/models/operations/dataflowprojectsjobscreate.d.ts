import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum DataflowProjectsJobsCreateViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsJobsCreateQueryParams extends SpeakeasyBase {
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
    replaceJobId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DataflowProjectsJobsCreateViewEnum;
}
export declare class DataflowProjectsJobsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsCreateSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsCreateSecurityOption1;
    option2?: DataflowProjectsJobsCreateSecurityOption2;
    option3?: DataflowProjectsJobsCreateSecurityOption3;
    option4?: DataflowProjectsJobsCreateSecurityOption4;
}
export declare class DataflowProjectsJobsCreateRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsCreatePathParams;
    queryParams: DataflowProjectsJobsCreateQueryParams;
    request?: shared.JobInput;
    security: DataflowProjectsJobsCreateSecurity;
}
export declare class DataflowProjectsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
