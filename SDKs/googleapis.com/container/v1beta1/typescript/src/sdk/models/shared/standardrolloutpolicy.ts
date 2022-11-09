import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StandardRolloutPolicy
/** 
 * Standard rollout policy is the default policy for blue-green.
**/
export class StandardRolloutPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=batchNodeCount" })
  batchNodeCount?: number;

  @Metadata({ data: "json, name=batchPercentage" })
  batchPercentage?: number;

  @Metadata({ data: "json, name=batchSoakDuration" })
  batchSoakDuration?: string;
}
