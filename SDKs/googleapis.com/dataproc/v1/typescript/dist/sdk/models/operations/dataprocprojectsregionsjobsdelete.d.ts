import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsJobsDeletePathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsJobsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsJobsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsJobsDeleteRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsJobsDeletePathParams;
    queryParams: DataprocProjectsRegionsJobsDeleteQueryParams;
    security: DataprocProjectsRegionsJobsDeleteSecurity;
}
export declare class DataprocProjectsRegionsJobsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
