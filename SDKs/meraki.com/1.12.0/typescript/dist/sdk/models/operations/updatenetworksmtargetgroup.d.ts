import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSmTargetGroupPathParams extends SpeakeasyBase {
    networkId: string;
    targetGroupId: string;
}
export declare class UpdateNetworkSmTargetGroupRequestBody extends SpeakeasyBase {
    name?: string;
    scope?: string;
}
export declare class UpdateNetworkSmTargetGroupRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSmTargetGroupPathParams;
    request?: UpdateNetworkSmTargetGroupRequestBody;
}
export declare class UpdateNetworkSmTargetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSmTargetGroup200ApplicationJsonObject?: Map<string, any>;
}
