import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class JobsProjectsTenantsJobsGetQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsJobsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsGetSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsGetSecurityOption1;
    option2?: JobsProjectsTenantsJobsGetSecurityOption2;
}
export declare class JobsProjectsTenantsJobsGetRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsGetPathParams;
    queryParams: JobsProjectsTenantsJobsGetQueryParams;
    security: JobsProjectsTenantsJobsGetSecurity;
}
export declare class JobsProjectsTenantsJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
