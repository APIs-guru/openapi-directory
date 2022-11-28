import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceSettingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceSettingsPathParams;
}
export declare class GetNetworkApplianceSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceSettings200ApplicationJsonObject?: Map<string, any>;
}
