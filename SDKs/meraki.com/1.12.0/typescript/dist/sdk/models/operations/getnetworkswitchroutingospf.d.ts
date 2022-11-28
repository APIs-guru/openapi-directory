import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchRoutingOspfPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchRoutingOspfRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchRoutingOspfPathParams;
}
export declare class GetNetworkSwitchRoutingOspfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchRoutingOspf200ApplicationJsonObject?: Map<string, any>;
}
