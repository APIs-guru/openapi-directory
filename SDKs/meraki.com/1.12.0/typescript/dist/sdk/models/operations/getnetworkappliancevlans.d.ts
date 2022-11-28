import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceVlansPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceVlansRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceVlansPathParams;
}
export declare class GetNetworkApplianceVlansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceVlans200ApplicationJsonObject?: Map<string, any>;
}
