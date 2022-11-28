import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersNodePoolsSetAutoscalingPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetAutoscalingQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersNodePoolsSetAutoscalingPathParams;
    queryParams: ContainerProjectsLocationsClustersNodePoolsSetAutoscalingQueryParams;
    request?: shared.SetNodePoolAutoscalingRequest;
    security: ContainerProjectsLocationsClustersNodePoolsSetAutoscalingSecurity;
}
export declare class ContainerProjectsLocationsClustersNodePoolsSetAutoscalingResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
