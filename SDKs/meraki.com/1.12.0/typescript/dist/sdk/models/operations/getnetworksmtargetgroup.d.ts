import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmTargetGroupPathParams extends SpeakeasyBase {
    networkId: string;
    targetGroupId: string;
}
export declare class GetNetworkSmTargetGroupQueryParams extends SpeakeasyBase {
    withDetails?: boolean;
}
export declare class GetNetworkSmTargetGroupRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmTargetGroupPathParams;
    queryParams: GetNetworkSmTargetGroupQueryParams;
}
export declare class GetNetworkSmTargetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmTargetGroup200ApplicationJsonObject?: Map<string, any>;
}
