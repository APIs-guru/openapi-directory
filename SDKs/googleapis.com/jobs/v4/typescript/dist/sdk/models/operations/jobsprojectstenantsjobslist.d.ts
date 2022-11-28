import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum JobsProjectsTenantsJobsListJobViewEnum {
    JobViewUnspecified = "JOB_VIEW_UNSPECIFIED",
    JobViewIdOnly = "JOB_VIEW_ID_ONLY",
    JobViewMinimal = "JOB_VIEW_MINIMAL",
    JobViewSmall = "JOB_VIEW_SMALL",
    JobViewFull = "JOB_VIEW_FULL"
}
export declare class JobsProjectsTenantsJobsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    jobView?: JobsProjectsTenantsJobsListJobViewEnum;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class JobsProjectsTenantsJobsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsListSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsListSecurityOption1;
    option2?: JobsProjectsTenantsJobsListSecurityOption2;
}
export declare class JobsProjectsTenantsJobsListRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsListPathParams;
    queryParams: JobsProjectsTenantsJobsListQueryParams;
    security: JobsProjectsTenantsJobsListSecurity;
}
export declare class JobsProjectsTenantsJobsListResponse extends SpeakeasyBase {
    contentType: string;
    listJobsResponse?: shared.ListJobsResponse;
    statusCode: number;
}
