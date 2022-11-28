import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceVpnBgpPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkApplianceVpnBgpRequestBodyNeighbors extends SpeakeasyBase {
    allowTransit?: boolean;
    ebgpHoldTimer: number;
    ebgpMultihop: number;
    ip: string;
    receiveLimit?: number;
    remoteAsNumber: number;
}
export declare class UpdateNetworkApplianceVpnBgpRequestBody extends SpeakeasyBase {
    asNumber?: number;
    enabled: boolean;
    ibgpHoldTimer?: number;
    neighbors?: UpdateNetworkApplianceVpnBgpRequestBodyNeighbors[];
}
export declare class UpdateNetworkApplianceVpnBgpRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceVpnBgpPathParams;
    request: UpdateNetworkApplianceVpnBgpRequestBody;
}
export declare class UpdateNetworkApplianceVpnBgpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceVpnBgp200ApplicationJsonObject?: Map<string, any>;
}
