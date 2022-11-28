import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsJobsDebugGetConfigPathParams extends SpeakeasyBase {
    jobId: string;
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsJobsDebugGetConfigSecurityOption1;
    option2?: DataflowProjectsLocationsJobsDebugGetConfigSecurityOption2;
    option3?: DataflowProjectsLocationsJobsDebugGetConfigSecurityOption3;
    option4?: DataflowProjectsLocationsJobsDebugGetConfigSecurityOption4;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsJobsDebugGetConfigPathParams;
    queryParams: DataflowProjectsLocationsJobsDebugGetConfigQueryParams;
    request?: shared.GetDebugConfigRequest;
    security: DataflowProjectsLocationsJobsDebugGetConfigSecurity;
}
export declare class DataflowProjectsLocationsJobsDebugGetConfigResponse extends SpeakeasyBase {
    contentType: string;
    getDebugConfigResponse?: shared.GetDebugConfigResponse;
    statusCode: number;
}
