import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStormControlPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchStormControlRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStormControlPathParams;
}
export declare class GetNetworkSwitchStormControlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStormControl200ApplicationJsonObject?: Map<string, any>;
}
