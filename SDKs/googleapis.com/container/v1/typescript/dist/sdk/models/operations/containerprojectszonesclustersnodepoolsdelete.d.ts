import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersNodePoolsDeletePathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersNodePoolsDeleteRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersNodePoolsDeletePathParams;
    queryParams: ContainerProjectsZonesClustersNodePoolsDeleteQueryParams;
    security: ContainerProjectsZonesClustersNodePoolsDeleteSecurity;
}
export declare class ContainerProjectsZonesClustersNodePoolsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
