import { SpeakeasyBase } from "../../../internal/utils";
import { ExistingDisk } from "./existingdisk";
import { NfsMount } from "./nfsmount";
import { PersistentDisk } from "./persistentdisk";
/**
 * Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.
**/
export declare class Volume extends SpeakeasyBase {
    existingDisk?: ExistingDisk;
    nfsMount?: NfsMount;
    persistentDisk?: PersistentDisk;
    volume?: string;
}
