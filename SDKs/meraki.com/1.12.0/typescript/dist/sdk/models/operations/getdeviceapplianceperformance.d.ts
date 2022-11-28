import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceAppliancePerformancePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceAppliancePerformanceRequest extends SpeakeasyBase {
    pathParams: GetDeviceAppliancePerformancePathParams;
}
export declare class GetDeviceAppliancePerformanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceAppliancePerformance200ApplicationJsonObject?: Map<string, any>;
}
