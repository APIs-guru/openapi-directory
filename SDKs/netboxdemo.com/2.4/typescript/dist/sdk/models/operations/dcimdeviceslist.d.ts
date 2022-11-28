import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesListQueryParams extends SpeakeasyBase {
    assetTag?: string;
    clusterId?: string;
    deviceTypeId?: string;
    hasPrimaryIp?: string;
    idIn?: string;
    isConsoleServer?: string;
    isFullDepth?: string;
    isNetworkDevice?: string;
    isPdu?: string;
    limit?: number;
    macAddress?: string;
    manufacturer?: string;
    manufacturerId?: string;
    model?: string;
    name?: string;
    offset?: number;
    platform?: string;
    platformId?: string;
    position?: number;
    q?: string;
    rackGroupId?: string;
    rackId?: string;
    region?: string;
    regionId?: number;
    role?: string;
    roleId?: string;
    serial?: string;
    site?: string;
    siteId?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    virtualChassisId?: string;
}
export declare class DcimDevicesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Device[];
}
export declare class DcimDevicesListRequest extends SpeakeasyBase {
    queryParams: DcimDevicesListQueryParams;
}
export declare class DcimDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimDevicesList200ApplicationJsonObject?: DcimDevicesList200ApplicationJson;
}
