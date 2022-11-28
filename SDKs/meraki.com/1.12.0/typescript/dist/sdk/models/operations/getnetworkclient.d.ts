import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkClientPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkClientRequest extends SpeakeasyBase {
    pathParams: GetNetworkClientPathParams;
}
export declare class GetNetworkClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkClient200ApplicationJsonObject?: Map<string, any>;
}
