import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetNodeBalancerConfigNodesPathParams extends SpeakeasyBase {
    configId: number;
    nodeBalancerId: number;
}
export declare class GetNodeBalancerConfigNodesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetNodeBalancerConfigNodesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetNodeBalancerConfigNodes200ApplicationJson extends SpeakeasyBase {
    data?: shared.NodeBalancerNode[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetNodeBalancerConfigNodesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetNodeBalancerConfigNodesRequest extends SpeakeasyBase {
    pathParams: GetNodeBalancerConfigNodesPathParams;
    queryParams: GetNodeBalancerConfigNodesQueryParams;
    security: GetNodeBalancerConfigNodesSecurity;
}
export declare class GetNodeBalancerConfigNodesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNodeBalancerConfigNodes200ApplicationJsonObject?: GetNodeBalancerConfigNodes200ApplicationJson;
    getNodeBalancerConfigNodesDefaultApplicationJsonObject?: GetNodeBalancerConfigNodesDefaultApplicationJson;
}
