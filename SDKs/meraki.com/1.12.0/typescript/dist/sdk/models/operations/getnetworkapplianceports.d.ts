import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkAppliancePortsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkAppliancePortsRequest extends SpeakeasyBase {
    pathParams: GetNetworkAppliancePortsPathParams;
}
export declare class GetNetworkAppliancePortsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkAppliancePorts200ApplicationJsonObject?: Map<string, any>;
}
