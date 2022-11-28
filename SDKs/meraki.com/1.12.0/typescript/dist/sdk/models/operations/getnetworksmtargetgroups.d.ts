import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmTargetGroupsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSmTargetGroupsQueryParams extends SpeakeasyBase {
    withDetails?: boolean;
}
export declare class GetNetworkSmTargetGroupsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmTargetGroupsPathParams;
    queryParams: GetNetworkSmTargetGroupsQueryParams;
}
export declare class GetNetworkSmTargetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmTargetGroups200ApplicationJsonObject?: Map<string, any>;
}
