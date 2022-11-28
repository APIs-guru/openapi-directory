import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsClustersCreatePathParams extends SpeakeasyBase {
    projectId: string;
    region: string;
}
export declare enum DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum {
    FailureActionUnspecified = "FAILURE_ACTION_UNSPECIFIED",
    NoAction = "NO_ACTION",
    Delete = "DELETE"
}
export declare class DataprocProjectsRegionsClustersCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    actionOnFailedPrimaryWorkers?: DataprocProjectsRegionsClustersCreateActionOnFailedPrimaryWorkersEnum;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataprocProjectsRegionsClustersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsClustersCreateRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsClustersCreatePathParams;
    queryParams: DataprocProjectsRegionsClustersCreateQueryParams;
    request?: shared.ClusterInput;
    security: DataprocProjectsRegionsClustersCreateSecurity;
}
export declare class DataprocProjectsRegionsClustersCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
