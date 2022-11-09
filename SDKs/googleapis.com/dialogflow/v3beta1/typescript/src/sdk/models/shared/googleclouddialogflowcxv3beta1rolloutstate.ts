import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1RolloutState
/** 
 * State of the auto-rollout process.
**/
export class GoogleCloudDialogflowCxV3beta1RolloutState extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=step" })
  step?: string;

  @Metadata({ data: "json, name=stepIndex" })
  stepIndex?: number;
}
