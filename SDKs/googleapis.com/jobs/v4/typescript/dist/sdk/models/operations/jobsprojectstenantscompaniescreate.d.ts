import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsCompaniesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsCompaniesCreateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsCompaniesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsCompaniesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsCompaniesCreateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsCompaniesCreateSecurityOption1;
    option2?: JobsProjectsTenantsCompaniesCreateSecurityOption2;
}
export declare class JobsProjectsTenantsCompaniesCreateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsCompaniesCreatePathParams;
    queryParams: JobsProjectsTenantsCompaniesCreateQueryParams;
    request?: shared.CompanyInput;
    security: JobsProjectsTenantsCompaniesCreateSecurity;
}
export declare class JobsProjectsTenantsCompaniesCreateResponse extends SpeakeasyBase {
    company?: shared.Company;
    contentType: string;
    statusCode: number;
}
