import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsClustersPatchPathParams extends SpeakeasyBase {
    clusterName: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsClustersPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    gracefulDecommissionTimeout?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataprocProjectsRegionsClustersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsClustersPatchRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsClustersPatchPathParams;
    queryParams: DataprocProjectsRegionsClustersPatchQueryParams;
    request?: shared.ClusterInput;
    security: DataprocProjectsRegionsClustersPatchSecurity;
}
export declare class DataprocProjectsRegionsClustersPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
