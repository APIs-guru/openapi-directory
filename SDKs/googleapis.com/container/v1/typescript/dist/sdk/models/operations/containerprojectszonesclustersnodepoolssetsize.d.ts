import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersNodePoolsSetSizePathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersNodePoolsSetSizeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersNodePoolsSetSizeRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersNodePoolsSetSizePathParams;
    queryParams: ContainerProjectsZonesClustersNodePoolsSetSizeQueryParams;
    request?: shared.SetNodePoolSizeRequest;
    security: ContainerProjectsZonesClustersNodePoolsSetSizeSecurity;
}
export declare class ContainerProjectsZonesClustersNodePoolsSetSizeResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
