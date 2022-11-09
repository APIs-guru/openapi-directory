import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReplicatingStep } from "./replicatingstep";


// CycleStep
/** 
 * CycleStep holds information about a step progress.
**/
export class CycleStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=initializingReplication" })
  initializingReplication?: Map<string, any>;

  @Metadata({ data: "json, name=postProcessing" })
  postProcessing?: Map<string, any>;

  @Metadata({ data: "json, name=replicating" })
  replicating?: ReplicatingStep;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
