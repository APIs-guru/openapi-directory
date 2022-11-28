import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceVlansSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkApplianceVlansSettingsRequestBody extends SpeakeasyBase {
    vlansEnabled?: boolean;
}
export declare class UpdateNetworkApplianceVlansSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceVlansSettingsPathParams;
    request?: UpdateNetworkApplianceVlansSettingsRequestBody;
}
export declare class UpdateNetworkApplianceVlansSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceVlansSettings200ApplicationJsonObject?: Map<string, any>;
}
