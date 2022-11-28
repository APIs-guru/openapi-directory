import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsJobsSearchForAlertPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsJobsSearchForAlertQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsJobsSearchForAlertSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsSearchForAlertSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsSearchForAlertSecurity extends SpeakeasyBase {
    option1?: JobsProjectsJobsSearchForAlertSecurityOption1;
    option2?: JobsProjectsJobsSearchForAlertSecurityOption2;
}
export declare class JobsProjectsJobsSearchForAlertRequest extends SpeakeasyBase {
    pathParams: JobsProjectsJobsSearchForAlertPathParams;
    queryParams: JobsProjectsJobsSearchForAlertQueryParams;
    request?: shared.SearchJobsRequest;
    security: JobsProjectsJobsSearchForAlertSecurity;
}
export declare class JobsProjectsJobsSearchForAlertResponse extends SpeakeasyBase {
    contentType: string;
    searchJobsResponse?: shared.SearchJobsResponse;
    statusCode: number;
}
