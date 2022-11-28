import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption1;
    option2?: DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption2;
    option3?: DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption3;
    option4?: DataflowProjectsLocationsJobsGetExecutionDetailsSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsGetExecutionDetailsPathParams;
    queryParams: DataflowProjectsLocationsJobsGetExecutionDetailsQueryParams;
    security: DataflowProjectsLocationsJobsGetExecutionDetailsSecurity;
}
export declare class DataflowProjectsLocationsJobsGetExecutionDetailsResponse extends SpeakeasyBase {
    contentType: string;
    jobExecutionDetails?: shared.JobExecutionDetails;
    statusCode: number;
}
