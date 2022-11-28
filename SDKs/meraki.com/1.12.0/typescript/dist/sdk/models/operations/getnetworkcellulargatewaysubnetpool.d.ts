import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkCellularGatewaySubnetPoolPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkCellularGatewaySubnetPoolRequest extends SpeakeasyBase {
    pathParams: GetNetworkCellularGatewaySubnetPoolPathParams;
}
export declare class GetNetworkCellularGatewaySubnetPoolResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkCellularGatewaySubnetPool200ApplicationJsonObject?: Map<string, any>;
}
