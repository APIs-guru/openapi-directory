import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsJobsUpdatePathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
}
export declare class DataflowProjectsJobsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataflowProjectsJobsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsUpdateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsUpdateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsJobsUpdateSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsJobsUpdateSecurityOption1;
    option2?: DataflowProjectsJobsUpdateSecurityOption2;
    option3?: DataflowProjectsJobsUpdateSecurityOption3;
    option4?: DataflowProjectsJobsUpdateSecurityOption4;
}
export declare class DataflowProjectsJobsUpdateRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsJobsUpdatePathParams;
    queryParams: DataflowProjectsJobsUpdateQueryParams;
    request?: shared.JobInput;
    security: DataflowProjectsJobsUpdateSecurity;
}
export declare class DataflowProjectsJobsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
