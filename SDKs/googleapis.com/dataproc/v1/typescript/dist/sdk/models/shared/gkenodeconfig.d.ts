import { SpeakeasyBase } from "../../../internal/utils";
import { GkeNodePoolAcceleratorConfig } from "./gkenodepoolacceleratorconfig";
/**
 * Parameters that describe cluster nodes.
**/
export declare class GkeNodeConfig extends SpeakeasyBase {
    accelerators?: GkeNodePoolAcceleratorConfig[];
    bootDiskKmsKey?: string;
    localSsdCount?: number;
    machineType?: string;
    minCpuPlatform?: string;
    preemptible?: boolean;
    spot?: boolean;
}
