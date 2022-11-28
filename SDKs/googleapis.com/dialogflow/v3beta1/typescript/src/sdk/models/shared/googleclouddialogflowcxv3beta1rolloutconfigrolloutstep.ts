import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep
/** 
 * A single rollout step with specified traffic allocation.
**/
export class GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=minDuration" })
  minDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=trafficPercent" })
  trafficPercent?: number;
}
