import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersNodePoolsGetPathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsGetQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersNodePoolsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersNodePoolsGetRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersNodePoolsGetPathParams;
    queryParams: ContainerProjectsZonesClustersNodePoolsGetQueryParams;
    security: ContainerProjectsZonesClustersNodePoolsGetSecurity;
}
export declare class ContainerProjectsZonesClustersNodePoolsGetResponse extends SpeakeasyBase {
    contentType: string;
    nodePool?: shared.NodePool;
    statusCode: number;
}
