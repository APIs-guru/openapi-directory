import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchSettingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchSettingsPathParams;
}
export declare class GetNetworkSwitchSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchSettings200ApplicationJsonObject?: Map<string, any>;
}
