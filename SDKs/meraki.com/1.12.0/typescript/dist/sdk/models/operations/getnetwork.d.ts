import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkRequest extends SpeakeasyBase {
    pathParams: GetNetworkPathParams;
}
export declare class GetNetworkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetwork200ApplicationJsonObject?: Map<string, any>;
}
