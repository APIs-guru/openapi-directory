import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeClusterNodePathParams extends SpeakeasyBase {
    clusterId: number;
    nodeId: string;
}
export declare class GetLkeClusterNodeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare enum GetLkeClusterNode200ApplicationJsonDataStatusEnum {
    Ready = "ready",
    NotReady = "not_ready"
}
/**
 * The selected node in the cluster.
 *
**/
export declare class GetLkeClusterNode200ApplicationJsonData extends SpeakeasyBase {
    id?: string;
    instanceId?: number;
    status?: GetLkeClusterNode200ApplicationJsonDataStatusEnum;
}
export declare class GetLkeClusterNode200ApplicationJson extends SpeakeasyBase {
    data?: GetLkeClusterNode200ApplicationJsonData;
}
export declare class GetLkeClusterNodeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLkeClusterNodeRequest extends SpeakeasyBase {
    pathParams: GetLkeClusterNodePathParams;
    security: GetLkeClusterNodeSecurity;
}
export declare class GetLkeClusterNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLkeClusterNode200ApplicationJsonObject?: GetLkeClusterNode200ApplicationJson;
    getLkeClusterNodeDefaultApplicationJsonObject?: GetLkeClusterNodeDefaultApplicationJson;
}
