import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskAttachment } from "./diskattachment";



// ExistingDisk
/** 
 * A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
**/
export class ExistingDisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: DiskAttachment;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
