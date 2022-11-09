import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3RolloutConfigRolloutStep } from "./googleclouddialogflowcxv3rolloutconfigrolloutstep";


// GoogleCloudDialogflowCxV3RolloutConfig
/** 
 * The configuration for auto rollout.
**/
export class GoogleCloudDialogflowCxV3RolloutConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCondition" })
  failureCondition?: string;

  @Metadata({ data: "json, name=rolloutCondition" })
  rolloutCondition?: string;

  @Metadata({ data: "json, name=rolloutSteps", elemType: shared.GoogleCloudDialogflowCxV3RolloutConfigRolloutStep })
  rolloutSteps?: GoogleCloudDialogflowCxV3RolloutConfigRolloutStep[];
}
