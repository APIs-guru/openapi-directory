import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsDebugSendCapturePathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class DataflowProjectsJobsDebugSendCaptureQueryParams extends SpeakeasyBase {
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
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsDebugSendCaptureSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsDebugSendCaptureSecurityOption1;
    option2?: DataflowProjectsJobsDebugSendCaptureSecurityOption2;
    option3?: DataflowProjectsJobsDebugSendCaptureSecurityOption3;
    option4?: DataflowProjectsJobsDebugSendCaptureSecurityOption4;
}
export declare class DataflowProjectsJobsDebugSendCaptureRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsDebugSendCapturePathParams;
    queryParams: DataflowProjectsJobsDebugSendCaptureQueryParams;
    request?: shared.SendDebugCaptureRequest;
    security: DataflowProjectsJobsDebugSendCaptureSecurity;
}
export declare class DataflowProjectsJobsDebugSendCaptureResponse extends SpeakeasyBase {
    contentType: string;
    sendDebugCaptureResponse?: Map<string, any>;
    statusCode: number;
}
