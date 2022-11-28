import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkAppliancePortPathParams extends SpeakeasyBase {
    networkId: string;
    portId: string;
}
export declare class UpdateNetworkAppliancePortRequestBody extends SpeakeasyBase {
    accessPolicy?: string;
    allowedVlans?: string;
    dropUntaggedTraffic?: boolean;
    enabled?: boolean;
    type?: string;
    vlan?: number;
}
export declare class UpdateNetworkAppliancePortRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkAppliancePortPathParams;
    request?: UpdateNetworkAppliancePortRequestBody;
}
export declare class UpdateNetworkAppliancePortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkAppliancePort200ApplicationJsonObject?: Map<string, any>;
}
