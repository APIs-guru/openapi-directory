import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteNodeBalancerConfigPathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
}
export declare class DeleteNodeBalancerConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteNodeBalancerConfigRequest extends SpeakeasyBase {
    pathParams: DeleteNodeBalancerConfigPathParams;
    security: DeleteNodeBalancerConfigSecurity;
}
export declare class DeleteNodeBalancerConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteNodeBalancerConfig200ApplicationJsonObject?: Map<string, any>;
    deleteNodeBalancerConfigDefaultApplicationJsonObject?: DeleteNodeBalancerConfigDefaultApplicationJson;
}
