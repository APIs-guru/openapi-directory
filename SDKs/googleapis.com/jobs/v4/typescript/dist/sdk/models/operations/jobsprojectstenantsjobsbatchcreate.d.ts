import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsBatchCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsJobsBatchCreateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsJobsBatchCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsBatchCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsBatchCreateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsBatchCreateSecurityOption1;
    option2?: JobsProjectsTenantsJobsBatchCreateSecurityOption2;
}
export declare class JobsProjectsTenantsJobsBatchCreateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsBatchCreatePathParams;
    queryParams: JobsProjectsTenantsJobsBatchCreateQueryParams;
    request?: shared.BatchCreateJobsRequestInput;
    security: JobsProjectsTenantsJobsBatchCreateSecurity;
}
export declare class JobsProjectsTenantsJobsBatchCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
