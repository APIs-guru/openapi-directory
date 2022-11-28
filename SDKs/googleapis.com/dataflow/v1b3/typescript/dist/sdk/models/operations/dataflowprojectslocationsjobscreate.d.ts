import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsCreatePathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare enum DataflowProjectsLocationsJobsCreateViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsLocationsJobsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    replaceJobId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DataflowProjectsLocationsJobsCreateViewEnum;
}
export declare class DataflowProjectsLocationsJobsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsCreateSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsCreateSecurityOption1;
    option2?: DataflowProjectsLocationsJobsCreateSecurityOption2;
    option3?: DataflowProjectsLocationsJobsCreateSecurityOption3;
    option4?: DataflowProjectsLocationsJobsCreateSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsCreateRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsCreatePathParams;
    queryParams: DataflowProjectsLocationsJobsCreateQueryParams;
    request?: shared.JobInput;
    security: DataflowProjectsLocationsJobsCreateSecurity;
}
export declare class DataflowProjectsLocationsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
