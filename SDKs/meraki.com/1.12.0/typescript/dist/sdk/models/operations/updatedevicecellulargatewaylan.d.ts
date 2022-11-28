import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceCellularGatewayLanPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments extends SpeakeasyBase {
    ip: string;
    mac: string;
    name?: string;
}
export declare class UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges extends SpeakeasyBase {
    comment: string;
    end: string;
    start: string;
}
export declare class UpdateDeviceCellularGatewayLanRequestBody extends SpeakeasyBase {
    fixedIpAssignments?: UpdateDeviceCellularGatewayLanRequestBodyFixedIpAssignments[];
    reservedIpRanges?: UpdateDeviceCellularGatewayLanRequestBodyReservedIpRanges[];
}
export declare class UpdateDeviceCellularGatewayLanRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceCellularGatewayLanPathParams;
    request?: UpdateDeviceCellularGatewayLanRequestBody;
}
export declare class UpdateDeviceCellularGatewayLanResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceCellularGatewayLan200ApplicationJsonObject?: Map<string, any>;
}
