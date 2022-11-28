import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum JobsProjectsJobsListJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED",
    JobViewIdOnly = "JOB_VIEW_ID_ONLY",
    JobViewMinimal = "JOB_VIEW_MINIMAL",
    JobViewSmall = "JOB_VIEW_SMALL",
    JobViewFull = "JOB_VIEW_FULL"
}
export declare class JobsProjectsJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    jobView?: JobsProjectsJobsListJobViewEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class JobsProjectsJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsListSecurity extends SpeakeasyBase {
    option1?: JobsProjectsJobsListSecurityOption1;
    option2?: JobsProjectsJobsListSecurityOption2;
}
export declare class JobsProjectsJobsListRequest extends SpeakeasyBase {
    pathParams: JobsProjectsJobsListPathParams;
    queryParams: JobsProjectsJobsListQueryParams;
    security: JobsProjectsJobsListSecurity;
}
export declare class JobsProjectsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
