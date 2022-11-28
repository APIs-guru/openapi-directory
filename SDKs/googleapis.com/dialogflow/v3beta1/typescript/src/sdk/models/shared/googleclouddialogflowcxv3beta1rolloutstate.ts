import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1RolloutState
/** 
 * State of the auto-rollout process.
**/
export class GoogleCloudDialogflowCxV3beta1RolloutState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step?: string;

  @SpeakeasyMetadata({ data: "json, name=stepIndex" })
  stepIndex?: number;
}
