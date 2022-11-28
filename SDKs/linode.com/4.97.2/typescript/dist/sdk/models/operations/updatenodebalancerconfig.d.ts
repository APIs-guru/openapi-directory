import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNodeBalancerConfigPathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
}
export declare class UpdateNodeBalancerConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateNodeBalancerConfigRequest extends SpeakeasyBase {
    pathParams: UpdateNodeBalancerConfigPathParams;
    request: shared.NodeBalancerConfigInput;
    security: UpdateNodeBalancerConfigSecurity;
}
export declare class UpdateNodeBalancerConfigResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancerConfig?: shared.NodeBalancerConfig;
    statusCode: number;
    updateNodeBalancerConfigDefaultApplicationJsonObject?: UpdateNodeBalancerConfigDefaultApplicationJson;
}
