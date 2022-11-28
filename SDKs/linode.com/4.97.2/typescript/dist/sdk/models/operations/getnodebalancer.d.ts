import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodeBalancerPathParams extends SpeakeasyBase {
    nodeBalancerId: number;
}
export declare class GetNodeBalancerSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetNodeBalancerDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetNodeBalancerRequest extends SpeakeasyBase {
    pathParams: GetNodeBalancerPathParams;
    security: GetNodeBalancerSecurity;
}
export declare class GetNodeBalancerResponse extends SpeakeasyBase {
    contentType: string;
    nodeBalancer?: shared.NodeBalancer;
    statusCode: number;
    getNodeBalancerDefaultApplicationJsonObject?: GetNodeBalancerDefaultApplicationJson;
}
