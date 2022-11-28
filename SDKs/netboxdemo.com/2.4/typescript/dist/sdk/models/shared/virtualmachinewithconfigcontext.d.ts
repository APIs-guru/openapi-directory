import { SpeakeasyBase } from "../../../internal/utils";
import { NestedCluster } from "./nestedcluster";
import { NestedPlatform } from "./nestedplatform";
import { VirtualMachineIpAddress } from "./virtualmachineipaddress";
import { NestedDeviceRole } from "./nesteddevicerole";
import { NestedTenant } from "./nestedtenant";
export declare class VirtualMachineWithConfigContextStatus extends SpeakeasyBase {
    label: string;
    value: number;
}
export declare class VirtualMachineWithConfigContext extends SpeakeasyBase {
    cluster: NestedCluster;
    comments?: string;
    configContext?: string;
    created?: Date;
    customFields?: Map<string, any>;
    disk?: number;
    id?: number;
    lastUpdated?: Date;
    localContextData?: string;
    memory?: number;
    name: string;
    platform?: NestedPlatform;
    primaryIp?: VirtualMachineIpAddress;
    primaryIp4?: VirtualMachineIpAddress;
    primaryIp6?: VirtualMachineIpAddress;
    role?: NestedDeviceRole;
    status?: VirtualMachineWithConfigContextStatus;
    tags?: string[];
    tenant?: NestedTenant;
    vcpus?: number;
}
