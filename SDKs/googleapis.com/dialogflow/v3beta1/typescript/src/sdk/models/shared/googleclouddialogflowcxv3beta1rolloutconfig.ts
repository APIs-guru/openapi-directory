import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep } from "./googleclouddialogflowcxv3beta1rolloutconfigrolloutstep";



// GoogleCloudDialogflowCxV3beta1RolloutConfig
/** 
 * The configuration for auto rollout.
**/
export class GoogleCloudDialogflowCxV3beta1RolloutConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failureCondition" })
  failureCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=rolloutCondition" })
  rolloutCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=rolloutSteps", elemType: GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep })
  rolloutSteps?: GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep[];
}
