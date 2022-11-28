import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSettingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSettingsPathParams;
}
export declare class GetNetworkSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSettings200ApplicationJsonObject?: Map<string, any>;
}
