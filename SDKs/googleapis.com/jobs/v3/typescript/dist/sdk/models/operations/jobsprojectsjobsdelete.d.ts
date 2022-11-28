import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsJobsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class JobsProjectsJobsDeleteQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsJobsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsDeleteSecurity extends SpeakeasyBase {
    option1?: JobsProjectsJobsDeleteSecurityOption1;
    option2?: JobsProjectsJobsDeleteSecurityOption2;
}
export declare class JobsProjectsJobsDeleteRequest extends SpeakeasyBase {
    pathParams: JobsProjectsJobsDeletePathParams;
    queryParams: JobsProjectsJobsDeleteQueryParams;
    security: JobsProjectsJobsDeleteSecurity;
}
export declare class JobsProjectsJobsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
