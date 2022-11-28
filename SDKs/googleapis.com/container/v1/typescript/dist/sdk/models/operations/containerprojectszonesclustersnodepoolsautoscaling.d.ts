import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams extends SpeakeasyBase {
    clusterId: string;
    nodePoolId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesClustersNodePoolsAutoscalingRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesClustersNodePoolsAutoscalingPathParams;
    queryParams: ContainerProjectsZonesClustersNodePoolsAutoscalingQueryParams;
    request?: shared.SetNodePoolAutoscalingRequest;
    security: ContainerProjectsZonesClustersNodePoolsAutoscalingSecurity;
}
export declare class ContainerProjectsZonesClustersNodePoolsAutoscalingResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
