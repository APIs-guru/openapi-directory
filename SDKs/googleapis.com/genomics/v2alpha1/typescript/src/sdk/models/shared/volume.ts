import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExistingDisk } from "./existingdisk";
import { NfsMount } from "./nfsmount";
import { PersistentDisk } from "./persistentdisk";



// Volume
/** 
 * Carries information about storage that can be attached to a VM. Specify either `Volume` or `Disk`, but not both.
**/
export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=existingDisk" })
  existingDisk?: ExistingDisk;

  @SpeakeasyMetadata({ data: "json, name=nfsMount" })
  nfsMount?: NfsMount;

  @SpeakeasyMetadata({ data: "json, name=persistentDisk" })
  persistentDisk?: PersistentDisk;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: string;
}
