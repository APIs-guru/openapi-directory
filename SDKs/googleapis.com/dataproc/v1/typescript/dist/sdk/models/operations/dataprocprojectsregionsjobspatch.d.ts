import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsJobsPatchPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsJobsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataprocProjectsRegionsJobsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsJobsPatchRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsJobsPatchPathParams;
    queryParams: DataprocProjectsRegionsJobsPatchQueryParams;
    request?: shared.JobInput;
    security: DataprocProjectsRegionsJobsPatchSecurity;
}
export declare class DataprocProjectsRegionsJobsPatchResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
