import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteNodeBalancerConfigNodePathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
    nodeId: number;
}
export declare class DeleteNodeBalancerConfigNodeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteNodeBalancerConfigNodeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteNodeBalancerConfigNodeRequest extends SpeakeasyBase {
    pathParams: DeleteNodeBalancerConfigNodePathParams;
    security: DeleteNodeBalancerConfigNodeSecurity;
}
export declare class DeleteNodeBalancerConfigNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteNodeBalancerConfigNode200ApplicationJsonObject?: Map<string, any>;
    deleteNodeBalancerConfigNodeDefaultApplicationJsonObject?: DeleteNodeBalancerConfigNodeDefaultApplicationJson;
}
