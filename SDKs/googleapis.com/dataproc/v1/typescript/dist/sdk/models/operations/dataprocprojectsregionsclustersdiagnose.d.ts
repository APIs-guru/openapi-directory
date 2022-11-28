import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsClustersDiagnosePathParams extends SpeakeasyBase {
    clusterName: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsClustersDiagnoseQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsClustersDiagnoseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsClustersDiagnoseRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsClustersDiagnosePathParams;
    queryParams: DataprocProjectsRegionsClustersDiagnoseQueryParams;
    request?: Map<string, any>;
    security: DataprocProjectsRegionsClustersDiagnoseSecurity;
}
export declare class DataprocProjectsRegionsClustersDiagnoseResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
