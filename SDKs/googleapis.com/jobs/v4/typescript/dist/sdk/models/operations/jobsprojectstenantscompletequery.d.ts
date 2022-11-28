import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsCompleteQueryPathParams extends SpeakeasyBase {
    tenant: string;
}
export declare enum JobsProjectsTenantsCompleteQueryScopeEnum {
    CompletionScopeUnspecified = "COMPLETION_SCOPE_UNSPECIFIED",
    Tenant = "TENANT",
    Public = "PUBLIC"
}
export declare enum JobsProjectsTenantsCompleteQueryTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED",
    JobTitle = "JOB_TITLE",
    CompanyName = "COMPANY_NAME",
    Combined = "COMBINED"
}
export declare class JobsProjectsTenantsCompleteQueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    company?: string;
    fields?: string;
    key?: string;
    languageCodes?: string[];
    oauthToken?: string;
    pageSize?: number;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    scope?: JobsProjectsTenantsCompleteQueryScopeEnum;
    type?: JobsProjectsTenantsCompleteQueryTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class JobsProjectsTenantsCompleteQuerySecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsCompleteQuerySecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsCompleteQuerySecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsCompleteQuerySecurityOption1;
    option2?: JobsProjectsTenantsCompleteQuerySecurityOption2;
}
export declare class JobsProjectsTenantsCompleteQueryRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsCompleteQueryPathParams;
    queryParams: JobsProjectsTenantsCompleteQueryQueryParams;
    security: JobsProjectsTenantsCompleteQuerySecurity;
}
export declare class JobsProjectsTenantsCompleteQueryResponse extends SpeakeasyBase {
    completeQueryResponse?: shared.CompleteQueryResponse;
    contentType: string;
    statusCode: number;
}
