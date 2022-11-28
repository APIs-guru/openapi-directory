import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsMessagesListPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare enum DataflowProjectsJobsMessagesListMinimumImportanceEnum {
    JobMessageImportanceUnknown = "JOB_MESSAGE_IMPORTANCE_UNKNOWN",
    JobMessageDebug = "JOB_MESSAGE_DEBUG",
    JobMessageDetailed = "JOB_MESSAGE_DETAILED",
    JobMessageBasic = "JOB_MESSAGE_BASIC",
    JobMessageWarning = "JOB_MESSAGE_WARNING",
    JobMessageError = "JOB_MESSAGE_ERROR"
}
export declare class DataflowProjectsJobsMessagesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    endTime?: string;
    fields?: string;
    key?: string;
    location?: string;
    minimumImportance?: DataflowProjectsJobsMessagesListMinimumImportanceEnum;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    startTime?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsJobsMessagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsMessagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsMessagesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsMessagesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsMessagesListSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsMessagesListSecurityOption1;
    option2?: DataflowProjectsJobsMessagesListSecurityOption2;
    option3?: DataflowProjectsJobsMessagesListSecurityOption3;
    option4?: DataflowProjectsJobsMessagesListSecurityOption4;
}
export declare class DataflowProjectsJobsMessagesListRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsMessagesListPathParams;
    queryParams: DataflowProjectsJobsMessagesListQueryParams;
    security: DataflowProjectsJobsMessagesListSecurity;
}
export declare class DataflowProjectsJobsMessagesListResponse extends SpeakeasyBase {
    contentType: string;
    listJobMessagesResponse?: shared.ListJobMessagesResponse;
    statusCode: number;
}
