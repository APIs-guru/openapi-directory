import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsCreateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsCreateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsCreateSecurityOption1;
    option2?: JobsProjectsTenantsCreateSecurityOption2;
}
export declare class JobsProjectsTenantsCreateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsCreatePathParams;
    queryParams: JobsProjectsTenantsCreateQueryParams;
    request?: shared.Tenant;
    security: JobsProjectsTenantsCreateSecurity;
}
export declare class JobsProjectsTenantsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenant?: shared.Tenant;
}
