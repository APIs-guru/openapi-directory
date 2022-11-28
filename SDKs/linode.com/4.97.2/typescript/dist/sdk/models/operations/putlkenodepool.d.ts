import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutLkeNodePoolPathParams extends SpeakeasyBase {
    clusterId: number;
    poolId: number;
}
export declare class PutLkeNodePoolSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class PutLkeNodePoolRequest extends SpeakeasyBase {
    pathParams: PutLkeNodePoolPathParams;
    request?: any;
    security: PutLkeNodePoolSecurity;
}
export declare class PutLkeNodePoolResponse extends SpeakeasyBase {
    contentType: string;
    lkeNodePool?: shared.LkeNodePool;
    statusCode: number;
}
