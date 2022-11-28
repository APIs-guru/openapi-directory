import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsJobsSubmitPathParams extends SpeakeasyBase {
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsJobsSubmitQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsJobsSubmitSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsJobsSubmitRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsJobsSubmitPathParams;
    queryParams: DataprocProjectsRegionsJobsSubmitQueryParams;
    request?: shared.SubmitJobRequestInput;
    security: DataprocProjectsRegionsJobsSubmitSecurity;
}
export declare class DataprocProjectsRegionsJobsSubmitResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
