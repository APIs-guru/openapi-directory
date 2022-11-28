import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3RolloutState
/** 
 * State of the auto-rollout process.
**/
export class GoogleCloudDialogflowCxV3RolloutState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step?: string;

  @SpeakeasyMetadata({ data: "json, name=stepIndex" })
  stepIndex?: number;
}
