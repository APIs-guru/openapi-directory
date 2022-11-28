import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsJobsBatchDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsJobsBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class JobsProjectsJobsBatchDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsBatchDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsJobsBatchDeleteSecurity extends SpeakeasyBase {
    option1?: JobsProjectsJobsBatchDeleteSecurityOption1;
    option2?: JobsProjectsJobsBatchDeleteSecurityOption2;
}
export declare class JobsProjectsJobsBatchDeleteRequest extends SpeakeasyBase {
    pathParams: JobsProjectsJobsBatchDeletePathParams;
    queryParams: JobsProjectsJobsBatchDeleteQueryParams;
    request?: shared.BatchDeleteJobsRequest;
    security: JobsProjectsJobsBatchDeleteSecurity;
}
export declare class JobsProjectsJobsBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
