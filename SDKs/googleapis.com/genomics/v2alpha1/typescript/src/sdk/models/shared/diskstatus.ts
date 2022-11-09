import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DiskStatus
/** 
 * The status of a disk on a VM.
**/
export class DiskStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=freeSpaceBytes" })
  freeSpaceBytes?: string;

  @Metadata({ data: "json, name=totalSpaceBytes" })
  totalSpaceBytes?: string;
}
