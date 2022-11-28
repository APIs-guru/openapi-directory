import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCellularGatewayDhcpPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCellularGatewayDhcpRequest extends SpeakeasyBase {
    pathParams: GetNetworkCellularGatewayDhcpPathParams;
}
export declare class GetNetworkCellularGatewayDhcpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCellularGatewayDhcp200ApplicationJsonObject?: Map<string, any>;
}
