import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DiskAttachment } from "./diskattachment";


// ExistingDisk
/** 
 * A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
**/
export class ExistingDisk extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachment" })
  attachment?: DiskAttachment;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
