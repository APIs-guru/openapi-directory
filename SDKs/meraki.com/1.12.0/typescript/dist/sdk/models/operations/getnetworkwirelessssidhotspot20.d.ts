import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidHotspot20PathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidHotspot20Request extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidHotspot20PathParams;
}
export declare class GetNetworkWirelessSsidHotspot20Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidHotspot20200ApplicationJsonObject?: Map<string, any>;
}
