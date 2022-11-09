import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicationCycle } from "./replicationcycle";
import { ReplicationCycle } from "./replicationcycle";


// CutoverStep
/** 
 * CutoverStep holds information about the cutover step progress.
**/
export class CutoverStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=finalSync" })
  finalSync?: ReplicationCycle;

  @Metadata({ data: "json, name=instantiatingMigratedVm" })
  instantiatingMigratedVm?: Map<string, any>;

  @Metadata({ data: "json, name=preparingVmDisks" })
  preparingVmDisks?: Map<string, any>;

  @Metadata({ data: "json, name=previousReplicationCycle" })
  previousReplicationCycle?: ReplicationCycle;

  @Metadata({ data: "json, name=shuttingDownSourceVm" })
  shuttingDownSourceVm?: Map<string, any>;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
