import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
    stageId: string;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endTime?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption1;
    option2?: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption2;
    option3?: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption3;
    option4?: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsStagesGetExecutionDetailsPathParams;
    queryParams: DataflowProjectsLocationsJobsStagesGetExecutionDetailsQueryParams;
    security: DataflowProjectsLocationsJobsStagesGetExecutionDetailsSecurity;
}
export declare class DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse extends SpeakeasyBase {
    contentType: string;
    stageExecutionDetails?: shared.StageExecutionDetails;
    statusCode: number;
}
