import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsDebugSendCapturePathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsDebugSendCaptureQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsDebugSendCaptureSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption1;
    option2?: DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption2;
    option3?: DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption3;
    option4?: DataflowProjectsLocationsJobsDebugSendCaptureSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsDebugSendCaptureRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsDebugSendCapturePathParams;
    queryParams: DataflowProjectsLocationsJobsDebugSendCaptureQueryParams;
    request?: shared.SendDebugCaptureRequest;
    security: DataflowProjectsLocationsJobsDebugSendCaptureSecurity;
}
export declare class DataflowProjectsLocationsJobsDebugSendCaptureResponse extends SpeakeasyBase {
    contentType: string;
    sendDebugCaptureResponse?: Map<string, any>;
    statusCode: number;
}
