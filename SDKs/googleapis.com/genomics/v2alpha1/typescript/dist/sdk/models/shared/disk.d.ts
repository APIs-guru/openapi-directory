import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Carries information about a disk that can be attached to a VM. See https://cloud.google.com/compute/docs/disks/performance for more information about disk type, size, and performance considerations. Specify either `Volume` or `Disk`, but not both.
**/
export declare class Disk extends SpeakeasyBase {
    name?: string;
    sizeGb?: number;
    sourceImage?: string;
    type?: string;
}
