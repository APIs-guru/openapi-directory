import { SpeakeasyBase } from "../../../internal/utils";
import { ExistingDisk } from "./existingdisk";
import { NewDisk } from "./newdisk";
import { Metadata } from "./metadata";
import { NetworkInterface } from "./networkinterface";
import { ServiceAccount } from "./serviceaccount";
import { Tag } from "./tag";
/**
 * Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
**/
export declare class VmParams extends SpeakeasyBase {
    baseInstanceName?: string;
    canIpForward?: boolean;
    description?: string;
    disksToAttach?: ExistingDisk[];
    disksToCreate?: NewDisk[];
    machineType?: string;
    metadata?: Metadata;
    networkInterfaces?: NetworkInterface[];
    onHostMaintenance?: string;
    serviceAccounts?: ServiceAccount[];
    tags?: Tag;
}
