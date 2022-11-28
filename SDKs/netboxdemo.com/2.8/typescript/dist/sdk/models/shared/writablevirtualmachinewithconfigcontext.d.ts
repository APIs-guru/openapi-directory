import { SpeakeasyBase } from "../../../internal/utils";
export declare enum WritableVirtualMachineWithConfigContextStatusEnum {
    Offline = "offline",
    Active = "active",
    Planned = "planned",
    Staged = "staged",
    Failed = "failed",
    Decommissioning = "decommissioning"
}
export declare class WritableVirtualMachineWithConfigContextInput extends SpeakeasyBase {
    cluster: number;
    comments?: string;
    customFields?: Map<string, any>;
    disk?: number;
    localContextData?: string;
    memory?: number;
    name: string;
    platform?: number;
    primaryIp4?: number;
    primaryIp6?: number;
    role?: number;
    status?: WritableVirtualMachineWithConfigContextStatusEnum;
    tags?: string[];
    tenant?: number;
    vcpus?: number;
}
