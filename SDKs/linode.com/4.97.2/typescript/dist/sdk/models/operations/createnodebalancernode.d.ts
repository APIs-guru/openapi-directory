import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateNodeBalancerNodePathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
}
export declare enum CreateNodeBalancerNodeRequestBodyModeEnum {
    Accept = "accept",
    Reject = "reject",
    Drain = "drain",
    Backup = "backup"
}
export declare class CreateNodeBalancerNodeRequestBodyInput extends SpeakeasyBase {
    address: string;
    label: string;
    mode?: CreateNodeBalancerNodeRequestBodyModeEnum;
    weight?: number;
}
export declare class CreateNodeBalancerNodeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateNodeBalancerNodeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateNodeBalancerNodeRequest extends SpeakeasyBase {
    pathParams: CreateNodeBalancerNodePathParams;
    request: CreateNodeBalancerNodeRequestBodyInput;
    security: CreateNodeBalancerNodeSecurity;
}
export declare class CreateNodeBalancerNodeResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancerNode?: shared.NodeBalancerNode;
    statusCode: number;
    createNodeBalancerNodeDefaultApplicationJsonObject?: CreateNodeBalancerNodeDefaultApplicationJson;
}
