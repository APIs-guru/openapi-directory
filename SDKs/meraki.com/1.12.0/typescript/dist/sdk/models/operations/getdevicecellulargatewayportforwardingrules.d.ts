import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceCellularGatewayPortForwardingRulesPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceCellularGatewayPortForwardingRulesRequest extends SpeakeasyBase {
    pathParams: GetDeviceCellularGatewayPortForwardingRulesPathParams;
}
export declare class GetDeviceCellularGatewayPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
