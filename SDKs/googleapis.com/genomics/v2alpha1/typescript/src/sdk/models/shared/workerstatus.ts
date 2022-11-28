import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DiskStatus } from "./diskstatus";



// WorkerStatus
/** 
 * The status of the worker VM.
**/
export class WorkerStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachedDisks", elemType: DiskStatus })
  attachedDisks?: Map<string, DiskStatus>;

  @SpeakeasyMetadata({ data: "json, name=bootDisk" })
  bootDisk?: DiskStatus;

  @SpeakeasyMetadata({ data: "json, name=freeRamBytes" })
  freeRamBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=totalRamBytes" })
  totalRamBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=uptimeSeconds" })
  uptimeSeconds?: string;
}
