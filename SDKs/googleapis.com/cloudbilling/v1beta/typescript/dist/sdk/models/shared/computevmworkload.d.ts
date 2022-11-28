import { SpeakeasyBase } from "../../../internal/utils";
import { GuestAccelerator } from "./guestaccelerator";
import { Usage } from "./usage";
import { MachineType } from "./machinetype";
import { PersistentDisk } from "./persistentdisk";
/**
 * Specificies usage of a set of identical compute VM instances.
**/
export declare class ComputeVmWorkload extends SpeakeasyBase {
    enableConfidentialCompute?: boolean;
    guestAccelerator?: GuestAccelerator;
    instancesRunning?: Usage;
    licenses?: string[];
    machineType?: MachineType;
    persistentDisks?: PersistentDisk[];
    preemptible?: boolean;
    region?: string;
}
