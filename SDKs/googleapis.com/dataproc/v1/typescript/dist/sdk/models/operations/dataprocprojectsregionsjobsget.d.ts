import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsJobsGetPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsJobsGetQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsJobsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsJobsGetRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsJobsGetPathParams;
    queryParams: DataprocProjectsRegionsJobsGetQueryParams;
    security: DataprocProjectsRegionsJobsGetSecurity;
}
export declare class DataprocProjectsRegionsJobsGetResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
