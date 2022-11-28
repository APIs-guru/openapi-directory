import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceTrafficShapingPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceTrafficShapingRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceTrafficShapingPathParams;
}
export declare class GetNetworkApplianceTrafficShapingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceTrafficShaping200ApplicationJsonObject?: Map<string, any>;
}
