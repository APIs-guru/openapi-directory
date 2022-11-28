import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsClustersDeletePathParams extends SpeakeasyBase {
    clusterName: string;
    projectId: string;
    region: string;
}
export declare class DataprocProjectsRegionsClustersDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clusterUuid?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DataprocProjectsRegionsClustersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsClustersDeleteRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsClustersDeletePathParams;
    queryParams: DataprocProjectsRegionsClustersDeleteQueryParams;
    security: DataprocProjectsRegionsClustersDeleteSecurity;
}
export declare class DataprocProjectsRegionsClustersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
