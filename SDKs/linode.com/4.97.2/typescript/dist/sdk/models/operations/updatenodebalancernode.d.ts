import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNodeBalancerNodePathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
    nodeId: number;
}
export declare class UpdateNodeBalancerNodeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateNodeBalancerNodeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateNodeBalancerNodeRequest extends SpeakeasyBase {
    pathParams: UpdateNodeBalancerNodePathParams;
    request: shared.NodeBalancerNodeInput;
    security: UpdateNodeBalancerNodeSecurity;
}
export declare class UpdateNodeBalancerNodeResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancerNode?: shared.NodeBalancerNode;
    statusCode: number;
    updateNodeBalancerNodeDefaultApplicationJsonObject?: UpdateNodeBalancerNodeDefaultApplicationJson;
}
