import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkAlertsSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkAlertsSettingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkAlertsSettingsPathParams;
}
export declare class GetNetworkAlertsSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkAlertsSettings200ApplicationJsonObject?: Map<string, any>;
}
