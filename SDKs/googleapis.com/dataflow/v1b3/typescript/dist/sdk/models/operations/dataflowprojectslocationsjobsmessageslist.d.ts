import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsMessagesListPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare enum DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
    JobMessageDebug = "JOB_MESSAGE_DEBUG",
    JobMessageDetailed = "JOB_MESSAGE_DETAILED",
    JobMessageBasic = "JOB_MESSAGE_BASIC",
    JobMessageWarning = "JOB_MESSAGE_WARNING",
    JobMessageError = "JOB_MESSAGE_ERROR"
}
export declare class DataflowProjectsLocationsJobsMessagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endTime?: string;
    fields?: string;
    key?: string;
    minimumImportance?: DataflowProjectsLocationsJobsMessagesListMinimumImportanceEnum;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsLocationsJobsMessagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsMessagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsMessagesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsMessagesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsMessagesListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsMessagesListSecurityOption1;
    option2?: DataflowProjectsLocationsJobsMessagesListSecurityOption2;
    option3?: DataflowProjectsLocationsJobsMessagesListSecurityOption3;
    option4?: DataflowProjectsLocationsJobsMessagesListSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsMessagesListRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsMessagesListPathParams;
    queryParams: DataflowProjectsLocationsJobsMessagesListQueryParams;
    security: DataflowProjectsLocationsJobsMessagesListSecurity;
}
export declare class DataflowProjectsLocationsJobsMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    listJobMessagesResponse?: shared.ListJobMessagesResponse;
    statusCode: number;
}
