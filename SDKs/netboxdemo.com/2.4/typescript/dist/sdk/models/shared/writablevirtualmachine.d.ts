import { SpeakeasyBase } from "../../../internal/utils";
export declare class WritableVirtualMachineInput extends SpeakeasyBase {
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
    status?: number;
    tags?: string[];
    tenant?: number;
    vcpus?: number;
}
