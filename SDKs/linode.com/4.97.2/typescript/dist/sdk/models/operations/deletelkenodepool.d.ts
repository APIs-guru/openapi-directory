import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLkeNodePoolPathParams extends SpeakeasyBase {
    clusterId: number;
    poolId: number;
}
export declare class DeleteLkeNodePoolSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteLkeNodePoolDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteLkeNodePoolRequest extends SpeakeasyBase {
    pathParams: DeleteLkeNodePoolPathParams;
    security: DeleteLkeNodePoolSecurity;
}
export declare class DeleteLkeNodePoolResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteLkeNodePool200ApplicationJsonObject?: Map<string, any>;
    deleteLkeNodePoolDefaultApplicationJsonObject?: DeleteLkeNodePoolDefaultApplicationJson;
}
