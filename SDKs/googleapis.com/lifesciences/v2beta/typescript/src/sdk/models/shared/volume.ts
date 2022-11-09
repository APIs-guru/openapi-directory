import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExistingDisk } from "./existingdisk";
import { NfsMount } from "./nfsmount";
import { PersistentDisk } from "./persistentdisk";


// Volume
/** 
 * Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.
**/
export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=existingDisk" })
  existingDisk?: ExistingDisk;

  @Metadata({ data: "json, name=nfsMount" })
  nfsMount?: NfsMount;

  @Metadata({ data: "json, name=persistentDisk" })
  persistentDisk?: PersistentDisk;

  @Metadata({ data: "json, name=volume" })
  volume?: string;
}
