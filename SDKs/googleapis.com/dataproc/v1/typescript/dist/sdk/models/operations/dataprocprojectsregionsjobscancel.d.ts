import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsJobsCancelPathParams extends SpeakeasyBase {
    jobId: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsJobsCancelQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsJobsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsJobsCancelRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsJobsCancelPathParams;
    queryParams: DataprocProjectsRegionsJobsCancelQueryParams;
    request?: Map<string, any>;
    security: DataprocProjectsRegionsJobsCancelSecurity;
}
export declare class DataprocProjectsRegionsJobsCancelResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
