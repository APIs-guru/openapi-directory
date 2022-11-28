import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class JobsProjectsTenantsJobsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class JobsProjectsTenantsJobsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsPatchSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsPatchSecurityOption1;
    option2?: JobsProjectsTenantsJobsPatchSecurityOption2;
}
export declare class JobsProjectsTenantsJobsPatchRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsPatchPathParams;
    queryParams: JobsProjectsTenantsJobsPatchQueryParams;
    request?: shared.JobInput;
    security: JobsProjectsTenantsJobsPatchSecurity;
}
export declare class JobsProjectsTenantsJobsPatchResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
