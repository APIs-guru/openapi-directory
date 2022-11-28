import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessRfProfilesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessRfProfilesQueryParams extends SpeakeasyBase {
    includeTemplateProfiles?: boolean;
}
export declare class GetNetworkWirelessRfProfilesRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessRfProfilesPathParams;
    queryParams: GetNetworkWirelessRfProfilesQueryParams;
}
export declare class GetNetworkWirelessRfProfilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessRfProfiles200ApplicationJsonObject?: Map<string, any>;
}
