import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessBillingPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessBillingRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessBillingPathParams;
}
export declare class GetNetworkWirelessBillingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessBilling200ApplicationJsonObject?: Map<string, any>;
}
