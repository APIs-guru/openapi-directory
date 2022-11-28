import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExistingDisk } from "./existingdisk";
import { NewDisk } from "./newdisk";
import { Metadata } from "./metadata";
import { NetworkInterface } from "./networkinterface";
import { ServiceAccount } from "./serviceaccount";
import { Tag } from "./tag";



// VmParams
/** 
 * Parameters for creating a Compute Engine Instance resource. Most fields are identical to the corresponding Compute Engine resource.
**/
export class VmParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseInstanceName" })
  baseInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=canIpForward" })
  canIpForward?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=disksToAttach", elemType: ExistingDisk })
  disksToAttach?: ExistingDisk[];

  @SpeakeasyMetadata({ data: "json, name=disksToCreate", elemType: NewDisk })
  disksToCreate?: NewDisk[];

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=onHostMaintenance" })
  onHostMaintenance?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccounts", elemType: ServiceAccount })
  serviceAccounts?: ServiceAccount[];

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Tag;
}
