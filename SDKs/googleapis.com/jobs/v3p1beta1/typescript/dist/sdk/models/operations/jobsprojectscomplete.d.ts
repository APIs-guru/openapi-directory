import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsCompletePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum JobsProjectsCompleteScopeEnum {
    CompletionScopeUnspecified = "COMPLETION_SCOPE_UNSPECIFIED",
    Tenant = "TENANT",
    Public = "PUBLIC"
}
export declare enum JobsProjectsCompleteTypeEnum {
    CompletionTypeUnspecified = "COMPLETION_TYPE_UNSPECIFIED",
    JobTitle = "JOB_TITLE",
    CompanyName = "COMPANY_NAME",
    Combined = "COMBINED"
}
export declare class JobsProjectsCompleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    companyName?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    languageCodes?: string[];
    oauthToken?: string;
    pageSize?: number;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    scope?: JobsProjectsCompleteScopeEnum;
    type?: JobsProjectsCompleteTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class JobsProjectsCompleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsCompleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsCompleteSecurity extends SpeakeasyBase {
    option1?: JobsProjectsCompleteSecurityOption1;
    option2?: JobsProjectsCompleteSecurityOption2;
}
export declare class JobsProjectsCompleteRequest extends SpeakeasyBase {
    pathParams: JobsProjectsCompletePathParams;
    queryParams: JobsProjectsCompleteQueryParams;
    security: JobsProjectsCompleteSecurity;
}
export declare class JobsProjectsCompleteResponse extends SpeakeasyBase {
    completeQueryResponse?: shared.CompleteQueryResponse;
    contentType: string;
    statusCode: number;
}
