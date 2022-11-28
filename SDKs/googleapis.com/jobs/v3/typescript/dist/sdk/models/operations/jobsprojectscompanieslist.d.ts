import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsCompaniesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsCompaniesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requireOpenJobs?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class JobsProjectsCompaniesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsCompaniesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsCompaniesListSecurity extends SpeakeasyBase {
    option1?: JobsProjectsCompaniesListSecurityOption1;
    option2?: JobsProjectsCompaniesListSecurityOption2;
}
export declare class JobsProjectsCompaniesListRequest extends SpeakeasyBase {
    pathParams: JobsProjectsCompaniesListPathParams;
    queryParams: JobsProjectsCompaniesListQueryParams;
    security: JobsProjectsCompaniesListSecurity;
}
export declare class JobsProjectsCompaniesListResponse extends SpeakeasyBase {
    contentType: string;
    listCompaniesResponse?: shared.ListCompaniesResponse;
    statusCode: number;
}
