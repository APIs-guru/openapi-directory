import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkCellularGatewayDhcpPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkCellularGatewayDhcpRequestBody extends SpeakeasyBase {
    dhcpLeaseTime?: string;
    dnsCustomNameservers?: string[];
    dnsNameservers?: string;
}
export declare class UpdateNetworkCellularGatewayDhcpRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkCellularGatewayDhcpPathParams;
    request?: UpdateNetworkCellularGatewayDhcpRequestBody;
}
export declare class UpdateNetworkCellularGatewayDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkCellularGatewayDhcp200ApplicationJsonObject?: Map<string, any>;
}
