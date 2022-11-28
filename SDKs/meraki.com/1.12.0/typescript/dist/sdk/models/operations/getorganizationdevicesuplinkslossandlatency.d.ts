import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationDevicesUplinksLossAndLatencyPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2",
    Cellular = "cellular"
}
export declare class GetOrganizationDevicesUplinksLossAndLatencyQueryParams extends SpeakeasyBase {
    ip?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
    uplink?: GetOrganizationDevicesUplinksLossAndLatencyUplinkEnum;
}
export declare class GetOrganizationDevicesUplinksLossAndLatencyRequest extends SpeakeasyBase {
    pathParams: GetOrganizationDevicesUplinksLossAndLatencyPathParams;
    queryParams: GetOrganizationDevicesUplinksLossAndLatencyQueryParams;
}
export declare class GetOrganizationDevicesUplinksLossAndLatencyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationDevicesUplinksLossAndLatency200ApplicationJsonObject?: Map<string, any>;
}
