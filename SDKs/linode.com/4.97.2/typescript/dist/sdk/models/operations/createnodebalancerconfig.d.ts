import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateNodeBalancerConfigPathParams extends SpeakeasyBase {
    nodeBalancerId: number;
}
export declare class CreateNodeBalancerConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateNodeBalancerConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateNodeBalancerConfigRequest extends SpeakeasyBase {
    pathParams: CreateNodeBalancerConfigPathParams;
    request?: shared.NodeBalancerConfigInput;
    security: CreateNodeBalancerConfigSecurity;
}
export declare class CreateNodeBalancerConfigResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancerConfig?: shared.NodeBalancerConfig;
    statusCode: number;
    createNodeBalancerConfigDefaultApplicationJsonObject?: CreateNodeBalancerConfigDefaultApplicationJson;
}
