import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=baseInstanceName" })
  baseInstanceName?: string;

  @Metadata({ data: "json, name=canIpForward" })
  canIpForward?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=disksToAttach", elemType: shared.ExistingDisk })
  disksToAttach?: ExistingDisk[];

  @Metadata({ data: "json, name=disksToCreate", elemType: shared.NewDisk })
  disksToCreate?: NewDisk[];

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Metadata;

  @Metadata({ data: "json, name=networkInterfaces", elemType: shared.NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @Metadata({ data: "json, name=onHostMaintenance" })
  onHostMaintenance?: string;

  @Metadata({ data: "json, name=serviceAccounts", elemType: shared.ServiceAccount })
  serviceAccounts?: ServiceAccount[];

  @Metadata({ data: "json, name=tags" })
  tags?: Tag;
}
