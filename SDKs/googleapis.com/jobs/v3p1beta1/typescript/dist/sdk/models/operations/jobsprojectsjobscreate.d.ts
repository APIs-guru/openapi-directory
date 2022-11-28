import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsJobsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsCreateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsJobsCreateSecurityOption1;
    option2?: JobsProjectsJobsCreateSecurityOption2;
}
export declare class JobsProjectsJobsCreateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsJobsCreatePathParams;
    queryParams: JobsProjectsJobsCreateQueryParams;
    request?: shared.CreateJobRequest;
    security: JobsProjectsJobsCreateSecurity;
}
export declare class JobsProjectsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
