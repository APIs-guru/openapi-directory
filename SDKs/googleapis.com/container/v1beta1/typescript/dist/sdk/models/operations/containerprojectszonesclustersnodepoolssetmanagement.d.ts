import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersNodePoolsSetManagementPathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersNodePoolsSetManagementSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersNodePoolsSetManagementRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersNodePoolsSetManagementPathParams;
    queryParams: ContainerProjectsZonesClustersNodePoolsSetManagementQueryParams;
    request?: shared.SetNodePoolManagementRequest;
    security: ContainerProjectsZonesClustersNodePoolsSetManagementSecurity;
}
export declare class ContainerProjectsZonesClustersNodePoolsSetManagementResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
