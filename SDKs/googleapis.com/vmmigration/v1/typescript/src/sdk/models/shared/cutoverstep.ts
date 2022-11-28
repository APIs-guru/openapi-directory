import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicationCycle } from "./replicationcycle";



// CutoverStep
/** 
 * CutoverStep holds information about the cutover step progress.
**/
export class CutoverStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=finalSync" })
  finalSync?: ReplicationCycle;

  @SpeakeasyMetadata({ data: "json, name=instantiatingMigratedVm" })
  instantiatingMigratedVm?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=preparingVmDisks" })
  preparingVmDisks?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=previousReplicationCycle" })
  previousReplicationCycle?: ReplicationCycle;

  @SpeakeasyMetadata({ data: "json, name=shuttingDownSourceVm" })
  shuttingDownSourceVm?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
