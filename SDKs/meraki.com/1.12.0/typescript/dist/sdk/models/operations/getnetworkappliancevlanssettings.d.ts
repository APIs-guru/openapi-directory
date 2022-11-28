import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceVlansSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceVlansSettingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceVlansSettingsPathParams;
}
export declare class GetNetworkApplianceVlansSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceVlansSettings200ApplicationJsonObject?: Map<string, any>;
}
