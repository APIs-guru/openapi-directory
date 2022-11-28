import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsJobsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsCreateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsCreateSecurityOption1;
    option2?: JobsProjectsTenantsJobsCreateSecurityOption2;
}
export declare class JobsProjectsTenantsJobsCreateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsCreatePathParams;
    queryParams: JobsProjectsTenantsJobsCreateQueryParams;
    request?: shared.JobInput;
    security: JobsProjectsTenantsJobsCreateSecurity;
}
export declare class JobsProjectsTenantsJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
