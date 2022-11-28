import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchDscpToCosMappingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchDscpToCosMappingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchDscpToCosMappingsPathParams;
}
export declare class GetNetworkSwitchDscpToCosMappingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchDscpToCosMappings200ApplicationJsonObject?: Map<string, any>;
}
