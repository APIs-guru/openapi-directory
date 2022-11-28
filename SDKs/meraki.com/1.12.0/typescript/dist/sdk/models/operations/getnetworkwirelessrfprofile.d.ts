import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
    networkId: string;
    rfProfileId: string;
}
export declare class GetNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessRfProfilePathParams;
}
export declare class GetNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessRfProfile200ApplicationJsonObject?: Map<string, any>;
}
