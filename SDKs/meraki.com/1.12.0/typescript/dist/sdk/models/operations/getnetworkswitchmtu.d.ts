import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchMtuPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchMtuRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchMtuPathParams;
}
export declare class GetNetworkSwitchMtuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchMtu200ApplicationJsonObject?: Map<string, any>;
}
