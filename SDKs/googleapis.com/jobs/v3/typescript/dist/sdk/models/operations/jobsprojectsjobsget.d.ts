import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsJobsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class JobsProjectsJobsGetQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsJobsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsGetSecurity extends SpeakeasyBase {
    option1?: JobsProjectsJobsGetSecurityOption1;
    option2?: JobsProjectsJobsGetSecurityOption2;
}
export declare class JobsProjectsJobsGetRequest extends SpeakeasyBase {
    pathParams: JobsProjectsJobsGetPathParams;
    queryParams: JobsProjectsJobsGetQueryParams;
    security: JobsProjectsJobsGetSecurity;
}
export declare class JobsProjectsJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
