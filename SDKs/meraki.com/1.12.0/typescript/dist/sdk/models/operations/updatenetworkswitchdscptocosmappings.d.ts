import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchDscpToCosMappingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings extends SpeakeasyBase {
    cos: number;
    dscp: number;
    title?: string;
}
export declare class UpdateNetworkSwitchDscpToCosMappingsRequestBody extends SpeakeasyBase {
    mappings: UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings[];
}
export declare class UpdateNetworkSwitchDscpToCosMappingsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchDscpToCosMappingsPathParams;
    request: UpdateNetworkSwitchDscpToCosMappingsRequestBody;
}
export declare class UpdateNetworkSwitchDscpToCosMappingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchDscpToCosMappings200ApplicationJsonObject?: Map<string, any>;
}
