import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsJobsSearchForAlertPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsJobsSearchForAlertQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsTenantsJobsSearchForAlertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsSearchForAlertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsJobsSearchForAlertSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsJobsSearchForAlertSecurityOption1;
    option2?: JobsProjectsTenantsJobsSearchForAlertSecurityOption2;
}
export declare class JobsProjectsTenantsJobsSearchForAlertRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsJobsSearchForAlertPathParams;
    queryParams: JobsProjectsTenantsJobsSearchForAlertQueryParams;
    request?: shared.SearchJobsRequest;
    security: JobsProjectsTenantsJobsSearchForAlertSecurity;
}
export declare class JobsProjectsTenantsJobsSearchForAlertResponse extends SpeakeasyBase {
    contentType: string;
    searchJobsResponse?: shared.SearchJobsResponse;
    statusCode: number;
}
