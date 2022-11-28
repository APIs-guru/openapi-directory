import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkNetflowPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkNetflowRequest extends SpeakeasyBase {
    pathParams: GetNetworkNetflowPathParams;
}
export declare class GetNetworkNetflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkNetflow200ApplicationJsonObject?: Map<string, any>;
}
