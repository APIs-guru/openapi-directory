import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsSearchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsJobsSearchQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsJobsSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsSearchSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsSearchSecurityOption1;
    option2?: JobsProjectsTenantsJobsSearchSecurityOption2;
}
export declare class JobsProjectsTenantsJobsSearchRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsSearchPathParams;
    queryParams: JobsProjectsTenantsJobsSearchQueryParams;
    request?: shared.SearchJobsRequest;
    security: JobsProjectsTenantsJobsSearchSecurity;
}
export declare class JobsProjectsTenantsJobsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchJobsResponse?: shared.SearchJobsResponse;
    statusCode: number;
}
