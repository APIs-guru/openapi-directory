import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { CycleStep } from "./cyclestep";

export enum ReplicationCycleStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Running = "RUNNING"
,    Paused = "PAUSED"
,    Failed = "FAILED"
,    Succeeded = "SUCCEEDED"
}


// ReplicationCycle
/** 
 * ReplicationCycle contains information about the current replication cycle status.
**/
export class ReplicationCycle extends SpeakeasyBase {
  @Metadata({ data: "json, name=cycleNumber" })
  cycleNumber?: number;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=progress" })
  progress?: number;

  @Metadata({ data: "json, name=progressPercent" })
  progressPercent?: number;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: ReplicationCycleStateEnum;

  @Metadata({ data: "json, name=steps", elemType: shared.CycleStep })
  steps?: CycleStep[];

  @Metadata({ data: "json, name=totalPauseDuration" })
  totalPauseDuration?: string;
}
