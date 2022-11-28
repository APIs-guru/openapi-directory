import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3RolloutConfigRolloutStep } from "./googleclouddialogflowcxv3rolloutconfigrolloutstep";



// GoogleCloudDialogflowCxV3RolloutConfig
/** 
 * The configuration for auto rollout.
**/
export class GoogleCloudDialogflowCxV3RolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCondition" })
  failureCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=rolloutCondition" })
  rolloutCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=rolloutSteps", elemType: GoogleCloudDialogflowCxV3RolloutConfigRolloutStep })
  rolloutSteps?: GoogleCloudDialogflowCxV3RolloutConfigRolloutStep[];
}
