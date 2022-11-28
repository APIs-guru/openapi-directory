import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStpPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchStpRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStpPathParams;
}
export declare class GetNetworkSwitchStpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStp200ApplicationJsonObject?: Map<string, any>;
}
