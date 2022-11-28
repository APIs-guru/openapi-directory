import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsGetPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare enum DataflowProjectsLocationsJobsGetViewEnum {
    JobViewUnknown = "JOB_VIEW_UNKNOWN",
    JobViewSummary = "JOB_VIEW_SUMMARY",
    JobViewAll = "JOB_VIEW_ALL",
    JobViewDescription = "JOB_VIEW_DESCRIPTION"
}
export declare class DataflowProjectsLocationsJobsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DataflowProjectsLocationsJobsGetViewEnum;
}
export declare class DataflowProjectsLocationsJobsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsGetSecurityOption1;
    option2?: DataflowProjectsLocationsJobsGetSecurityOption2;
    option3?: DataflowProjectsLocationsJobsGetSecurityOption3;
    option4?: DataflowProjectsLocationsJobsGetSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsGetRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsGetPathParams;
    queryParams: DataflowProjectsLocationsJobsGetQueryParams;
    security: DataflowProjectsLocationsJobsGetSecurity;
}
export declare class DataflowProjectsLocationsJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
