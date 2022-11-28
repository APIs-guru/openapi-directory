import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReplicatingStep } from "./replicatingstep";



// CycleStep
/** 
 * CycleStep holds information about a step progress.
**/
export class CycleStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=initializingReplication" })
  initializingReplication?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=postProcessing" })
  postProcessing?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=replicating" })
  replicating?: ReplicatingStep;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
