import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodeBalancerConfigPathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
}
export declare class GetNodeBalancerConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetNodeBalancerConfigRequest extends SpeakeasyBase {
    pathParams: GetNodeBalancerConfigPathParams;
    security: GetNodeBalancerConfigSecurity;
}
export declare class GetNodeBalancerConfigResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancerConfig?: shared.NodeBalancerConfig;
    statusCode: number;
    getNodeBalancerConfigDefaultApplicationJsonObject?: GetNodeBalancerConfigDefaultApplicationJson;
}
