import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsJobsSearchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsJobsSearchQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsJobsSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsSearchSecurity extends SpeakeasyBase {
    option1?: JobsProjectsJobsSearchSecurityOption1;
    option2?: JobsProjectsJobsSearchSecurityOption2;
}
export declare class JobsProjectsJobsSearchRequest extends SpeakeasyBase {
    pathParams: JobsProjectsJobsSearchPathParams;
    queryParams: JobsProjectsJobsSearchQueryParams;
    request?: shared.SearchJobsRequest;
    security: JobsProjectsJobsSearchSecurity;
}
export declare class JobsProjectsJobsSearchResponse extends SpeakeasyBase {
    contentType: string;
    searchJobsResponse?: shared.SearchJobsResponse;
    statusCode: number;
}
