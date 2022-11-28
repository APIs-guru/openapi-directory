import { SpeakeasyBase } from "../../../internal/utils";
import { Accelerator } from "./accelerator";
import { Disk } from "./disk";
import { Network } from "./network";
import { ServiceAccount } from "./serviceaccount";
import { Volume } from "./volume";
/**
 * Carries information about a Compute Engine VM resource.
**/
export declare class VirtualMachine extends SpeakeasyBase {
    accelerators?: Accelerator[];
    bootDiskSizeGb?: number;
    bootImage?: string;
    cpuPlatform?: string;
    disks?: Disk[];
    dockerCacheImages?: string[];
    enableStackdriverMonitoring?: boolean;
    labels?: Map<string, string>;
    machineType?: string;
    network?: Network;
    nvidiaDriverVersion?: string;
    preemptible?: boolean;
    reservation?: string;
    serviceAccount?: ServiceAccount;
    volumes?: Volume[];
}
