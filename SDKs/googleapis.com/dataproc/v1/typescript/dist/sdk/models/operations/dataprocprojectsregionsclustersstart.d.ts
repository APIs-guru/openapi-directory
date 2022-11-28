import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsClustersStartPathParams extends SpeakeasyBase {
    clusterName: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsClustersStartQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsClustersStartSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsClustersStartRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsClustersStartPathParams;
    queryParams: DataprocProjectsRegionsClustersStartQueryParams;
    request?: shared.StartClusterRequest;
    security: DataprocProjectsRegionsClustersStartSecurity;
}
export declare class DataprocProjectsRegionsClustersStartResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
