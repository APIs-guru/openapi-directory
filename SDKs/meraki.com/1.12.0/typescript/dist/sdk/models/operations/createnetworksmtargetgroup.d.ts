import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSmTargetGroupPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkSmTargetGroupRequestBody extends SpeakeasyBase {
    name?: string;
    scope?: string;
}
export declare class CreateNetworkSmTargetGroupRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSmTargetGroupPathParams;
    request?: CreateNetworkSmTargetGroupRequestBody;
}
export declare class CreateNetworkSmTargetGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSmTargetGroup201ApplicationJsonObject?: Map<string, any>;
}
