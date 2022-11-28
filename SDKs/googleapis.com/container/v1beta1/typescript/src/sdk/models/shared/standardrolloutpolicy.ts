import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StandardRolloutPolicy
/** 
 * Standard rollout policy is the default policy for blue-green.
**/
export class StandardRolloutPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batchNodeCount" })
  batchNodeCount?: number;

  @SpeakeasyMetadata({ data: "json, name=batchPercentage" })
  batchPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=batchSoakDuration" })
  batchSoakDuration?: string;
}
