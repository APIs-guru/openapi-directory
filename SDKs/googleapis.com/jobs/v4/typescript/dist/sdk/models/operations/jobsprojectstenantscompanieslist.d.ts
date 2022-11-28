import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsCompaniesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsCompaniesListQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsCompaniesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsCompaniesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsCompaniesListSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsCompaniesListSecurityOption1;
    option2?: JobsProjectsTenantsCompaniesListSecurityOption2;
}
export declare class JobsProjectsTenantsCompaniesListRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsCompaniesListPathParams;
    queryParams: JobsProjectsTenantsCompaniesListQueryParams;
    security: JobsProjectsTenantsCompaniesListSecurity;
}
export declare class JobsProjectsTenantsCompaniesListResponse extends SpeakeasyBase {
    contentType: string;
    listCompaniesResponse?: shared.ListCompaniesResponse;
    statusCode: number;
}
