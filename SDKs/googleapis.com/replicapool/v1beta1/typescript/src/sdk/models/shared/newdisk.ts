import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskAttachment } from "./diskattachment";
import { NewDiskInitializeParams } from "./newdiskinitializeparams";



// NewDisk
/** 
 * A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
**/
export class NewDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: DiskAttachment;

  @SpeakeasyMetadata({ data: "json, name=autoDelete" })
  autoDelete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=boot" })
  boot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=initializeParams" })
  initializeParams?: NewDiskInitializeParams;
}
