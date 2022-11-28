import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsDebugGetConfigPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class DataflowProjectsJobsDebugGetConfigQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsJobsDebugGetConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsDebugGetConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsDebugGetConfigSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsDebugGetConfigSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsDebugGetConfigSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsDebugGetConfigSecurityOption1;
    option2?: DataflowProjectsJobsDebugGetConfigSecurityOption2;
    option3?: DataflowProjectsJobsDebugGetConfigSecurityOption3;
    option4?: DataflowProjectsJobsDebugGetConfigSecurityOption4;
}
export declare class DataflowProjectsJobsDebugGetConfigRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsDebugGetConfigPathParams;
    queryParams: DataflowProjectsJobsDebugGetConfigQueryParams;
    request?: shared.GetDebugConfigRequest;
    security: DataflowProjectsJobsDebugGetConfigSecurity;
}
export declare class DataflowProjectsJobsDebugGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    getDebugConfigResponse?: shared.GetDebugConfigResponse;
    statusCode: number;
}
