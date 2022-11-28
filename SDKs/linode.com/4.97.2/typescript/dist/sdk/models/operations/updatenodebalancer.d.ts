import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNodeBalancerPathParams extends SpeakeasyBase {
    nodeBalancerId: number;
}
export declare class UpdateNodeBalancerSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateNodeBalancerRequest extends SpeakeasyBase {
    pathParams: UpdateNodeBalancerPathParams;
    request: shared.NodeBalancerInput;
    security: UpdateNodeBalancerSecurity;
}
export declare class UpdateNodeBalancerResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancer?: shared.NodeBalancer;
    statusCode: number;
    updateNodeBalancerDefaultApplicationJsonObject?: UpdateNodeBalancerDefaultApplicationJson;
}
