import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DiskStatus } from "./diskstatus";
import { DiskStatus } from "./diskstatus";


// WorkerStatus
/** 
 * The status of the worker VM.
**/
export class WorkerStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachedDisks", elemType: shared.DiskStatus })
  attachedDisks?: Map<string, DiskStatus>;

  @Metadata({ data: "json, name=bootDisk" })
  bootDisk?: DiskStatus;

  @Metadata({ data: "json, name=freeRamBytes" })
  freeRamBytes?: string;

  @Metadata({ data: "json, name=totalRamBytes" })
  totalRamBytes?: string;

  @Metadata({ data: "json, name=uptimeSeconds" })
  uptimeSeconds?: string;
}
