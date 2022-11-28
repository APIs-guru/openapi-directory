import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsJobsSubmitAsOperationPathParams extends SpeakeasyBase {
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsJobsSubmitAsOperationQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsJobsSubmitAsOperationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsJobsSubmitAsOperationRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsJobsSubmitAsOperationPathParams;
    queryParams: DataprocProjectsRegionsJobsSubmitAsOperationQueryParams;
    request?: shared.SubmitJobRequestInput;
    security: DataprocProjectsRegionsJobsSubmitAsOperationSecurity;
}
export declare class DataprocProjectsRegionsJobsSubmitAsOperationResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
