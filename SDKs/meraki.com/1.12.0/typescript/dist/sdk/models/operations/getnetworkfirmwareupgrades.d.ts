import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkFirmwareUpgradesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkFirmwareUpgradesRequest extends SpeakeasyBase {
    pathParams: GetNetworkFirmwareUpgradesPathParams;
}
export declare class GetNetworkFirmwareUpgradesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkFirmwareUpgrades200ApplicationJsonObject?: Map<string, any>;
}
