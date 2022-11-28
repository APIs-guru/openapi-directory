import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsBatchUpdatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsJobsBatchUpdateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsJobsBatchUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsBatchUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsBatchUpdateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsBatchUpdateSecurityOption1;
    option2?: JobsProjectsTenantsJobsBatchUpdateSecurityOption2;
}
export declare class JobsProjectsTenantsJobsBatchUpdateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsBatchUpdatePathParams;
    queryParams: JobsProjectsTenantsJobsBatchUpdateQueryParams;
    request?: shared.BatchUpdateJobsRequestInput;
    security: JobsProjectsTenantsJobsBatchUpdateSecurity;
}
export declare class JobsProjectsTenantsJobsBatchUpdateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
