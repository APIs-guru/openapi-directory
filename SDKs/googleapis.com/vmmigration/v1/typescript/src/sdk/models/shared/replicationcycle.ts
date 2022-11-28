import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { CycleStep } from "./cyclestep";


export enum ReplicationCycleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Running = "RUNNING",
    Paused = "PAUSED",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED"
}


// ReplicationCycle
/** 
 * ReplicationCycle contains information about the current replication cycle status.
**/
export class ReplicationCycle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cycleNumber" })
  cycleNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=progressPercent" })
  progressPercent?: number;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ReplicationCycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: CycleStep })
  steps?: CycleStep[];

  @SpeakeasyMetadata({ data: "json, name=totalPauseDuration" })
  totalPauseDuration?: string;
}
