import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceCellularGatewayPortForwardingRulesPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules extends SpeakeasyBase {
    access: string;
    allowedIps?: string[];
    lanIp: string;
    localPort: string;
    name?: string;
    protocol: string;
    publicPort: string;
}
export declare class UpdateDeviceCellularGatewayPortForwardingRulesRequestBody extends SpeakeasyBase {
    rules?: UpdateDeviceCellularGatewayPortForwardingRulesRequestBodyRules[];
}
export declare class UpdateDeviceCellularGatewayPortForwardingRulesRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceCellularGatewayPortForwardingRulesPathParams;
    request?: UpdateDeviceCellularGatewayPortForwardingRulesRequestBody;
}
export declare class UpdateDeviceCellularGatewayPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceCellularGatewayPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
