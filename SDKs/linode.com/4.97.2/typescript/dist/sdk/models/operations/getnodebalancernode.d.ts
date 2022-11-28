import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodeBalancerNodePathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
    nodeId: number;
}
export declare class GetNodeBalancerNodeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetNodeBalancerNodeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetNodeBalancerNodeRequest extends SpeakeasyBase {
    pathParams: GetNodeBalancerNodePathParams;
    security: GetNodeBalancerNodeSecurity;
}
export declare class GetNodeBalancerNodeResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancerNode?: shared.NodeBalancerNode;
    statusCode: number;
    getNodeBalancerNodeDefaultApplicationJsonObject?: GetNodeBalancerNodeDefaultApplicationJson;
}
