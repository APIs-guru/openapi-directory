import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsClustersGetPathParams extends SpeakeasyBase {
    clusterName: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsClustersGetQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsClustersGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsClustersGetRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsClustersGetPathParams;
    queryParams: DataprocProjectsRegionsClustersGetQueryParams;
    security: DataprocProjectsRegionsClustersGetSecurity;
}
export declare class DataprocProjectsRegionsClustersGetResponse extends SpeakeasyBase {
    cluster?: shared.Cluster;
    contentType: string;
    statusCode: number;
}
