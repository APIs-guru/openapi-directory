import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for a persistent disk to be attached to the VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations.
**/
export declare class PersistentDisk extends SpeakeasyBase {
    sizeGb?: number;
    sourceImage?: string;
    type?: string;
}
