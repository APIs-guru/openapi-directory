import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeNodePoolPathParams extends SpeakeasyBase {
    clusterId: number;
    poolId: number;
}
export declare class GetLkeNodePoolSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLkeNodePoolRequest extends SpeakeasyBase {
    pathParams: GetLkeNodePoolPathParams;
    security: GetLkeNodePoolSecurity;
}
export declare class GetLkeNodePoolResponse extends SpeakeasyBase {
    contentType: string;
    lkeNodePool?: shared.LkeNodePool;
    statusCode: number;
}
