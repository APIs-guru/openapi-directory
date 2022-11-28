import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationVirtualMachinesListQueryParams extends SpeakeasyBase {
    cluster?: string;
    clusterGroup?: string;
    clusterGroupId?: string;
    clusterId?: string;
    clusterType?: string;
    clusterTypeId?: string;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    platform?: string;
    platformId?: string;
    q?: string;
    region?: string;
    regionId?: number;
    role?: string;
    roleId?: string;
    site?: string;
    siteId?: string;
    status?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
}
export declare class VirtualizationVirtualMachinesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.VirtualMachine[];
}
export declare class VirtualizationVirtualMachinesListRequest extends SpeakeasyBase {
    queryParams: VirtualizationVirtualMachinesListQueryParams;
}
export declare class VirtualizationVirtualMachinesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualizationVirtualMachinesList200ApplicationJsonObject?: VirtualizationVirtualMachinesList200ApplicationJson;
}
