import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    clusterId?: string;
    fields?: string;
    key?: string;
    nodePoolId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    zone?: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsDeleteRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsDeletePathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsDeleteQueryParams;
    security: ContainerProjectsLocationsClustersNodePoolsDeleteSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
