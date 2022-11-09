import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep
/** 
 * A single rollout step with specified traffic allocation.
**/
export class GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=minDuration" })
  minDuration?: string;

  @Metadata({ data: "json, name=trafficPercent" })
  trafficPercent?: number;
}
