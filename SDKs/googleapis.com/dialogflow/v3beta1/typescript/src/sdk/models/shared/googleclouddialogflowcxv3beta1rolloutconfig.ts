import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep } from "./googleclouddialogflowcxv3beta1rolloutconfigrolloutstep";


// GoogleCloudDialogflowCxV3beta1RolloutConfig
/** 
 * The configuration for auto rollout.
**/
export class GoogleCloudDialogflowCxV3beta1RolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCondition" })
  failureCondition?: string;

  @Metadata({ data: "json, name=rolloutCondition" })
  rolloutCondition?: string;

  @Metadata({ data: "json, name=rolloutSteps", elemType: shared.GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep })
  rolloutSteps?: GoogleCloudDialogflowCxV3beta1RolloutConfigRolloutStep[];
}
