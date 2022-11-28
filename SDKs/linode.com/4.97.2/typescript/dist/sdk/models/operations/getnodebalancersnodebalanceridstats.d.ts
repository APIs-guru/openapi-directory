import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodebalancersNodeBalancerIdStatsPathParams extends SpeakeasyBase {
    nodeBalancerId: number;
}
export declare class GetNodebalancersNodeBalancerIdStatsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetNodebalancersNodeBalancerIdStatsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetNodebalancersNodeBalancerIdStatsRequest extends SpeakeasyBase {
    pathParams: GetNodebalancersNodeBalancerIdStatsPathParams;
    security: GetNodebalancersNodeBalancerIdStatsSecurity;
}
export declare class GetNodebalancersNodeBalancerIdStatsResponse extends SpeakeasyBase {
    contentType: string;
    getNodebalancersNodeBalancerIdStatsDefaultApplicationJsonObject?: GetNodebalancersNodeBalancerIdStatsDefaultApplicationJson;
    nodeBalancerStats?: shared.NodeBalancerStats;
    statusCode: number;
}
