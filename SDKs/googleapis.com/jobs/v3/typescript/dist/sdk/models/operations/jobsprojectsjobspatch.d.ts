import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsJobsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class JobsProjectsJobsPatchQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsJobsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsPatchSecurity extends SpeakeasyBase {
    option1?: JobsProjectsJobsPatchSecurityOption1;
    option2?: JobsProjectsJobsPatchSecurityOption2;
}
export declare class JobsProjectsJobsPatchRequest extends SpeakeasyBase {
    pathParams: JobsProjectsJobsPatchPathParams;
    queryParams: JobsProjectsJobsPatchQueryParams;
    request?: shared.UpdateJobRequest;
    security: JobsProjectsJobsPatchSecurity;
}
export declare class JobsProjectsJobsPatchResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
