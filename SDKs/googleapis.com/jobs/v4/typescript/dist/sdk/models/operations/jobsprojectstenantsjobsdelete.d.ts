import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class JobsProjectsTenantsJobsDeleteQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsJobsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsDeleteSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsDeleteSecurityOption1;
    option2?: JobsProjectsTenantsJobsDeleteSecurityOption2;
}
export declare class JobsProjectsTenantsJobsDeleteRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsDeletePathParams;
    queryParams: JobsProjectsTenantsJobsDeleteQueryParams;
    security: JobsProjectsTenantsJobsDeleteSecurity;
}
export declare class JobsProjectsTenantsJobsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
