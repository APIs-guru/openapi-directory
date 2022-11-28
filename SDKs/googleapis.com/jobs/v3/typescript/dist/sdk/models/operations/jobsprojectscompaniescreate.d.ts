import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsCompaniesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsCompaniesCreateQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsCompaniesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsCompaniesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsCompaniesCreateSecurity extends SpeakeasyBase {
    option1?: JobsProjectsCompaniesCreateSecurityOption1;
    option2?: JobsProjectsCompaniesCreateSecurityOption2;
}
export declare class JobsProjectsCompaniesCreateRequest extends SpeakeasyBase {
    pathParams: JobsProjectsCompaniesCreatePathParams;
    queryParams: JobsProjectsCompaniesCreateQueryParams;
    request?: shared.CreateCompanyRequest;
    security: JobsProjectsCompaniesCreateSecurity;
}
export declare class JobsProjectsCompaniesCreateResponse extends SpeakeasyBase {
    company?: shared.Company;
    contentType: string;
    statusCode: number;
}
