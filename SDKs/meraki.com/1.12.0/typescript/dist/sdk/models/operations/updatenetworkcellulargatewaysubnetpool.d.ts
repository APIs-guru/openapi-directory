import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkCellularGatewaySubnetPoolPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkCellularGatewaySubnetPoolRequestBody extends SpeakeasyBase {
    cidr?: string;
    mask?: number;
}
export declare class UpdateNetworkCellularGatewaySubnetPoolRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkCellularGatewaySubnetPoolPathParams;
    request?: UpdateNetworkCellularGatewaySubnetPoolRequestBody;
}
export declare class UpdateNetworkCellularGatewaySubnetPoolResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkCellularGatewaySubnetPool200ApplicationJsonObject?: Map<string, any>;
}
