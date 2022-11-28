import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DiskStatus
/** 
 * The status of a disk on a VM.
**/
export class DiskStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freeSpaceBytes" })
  freeSpaceBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSpaceBytes" })
  totalSpaceBytes?: string;
}
