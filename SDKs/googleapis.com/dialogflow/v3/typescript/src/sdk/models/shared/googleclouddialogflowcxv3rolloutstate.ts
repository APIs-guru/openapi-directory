import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3RolloutState
/** 
 * State of the auto-rollout process.
**/
export class GoogleCloudDialogflowCxV3RolloutState extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=step" })
  step?: string;

  @Metadata({ data: "json, name=stepIndex" })
  stepIndex?: number;
}
