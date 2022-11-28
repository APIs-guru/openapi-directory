import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ExperimentDefinition } from "./googleclouddialogflowcxv3experimentdefinition";
import { GoogleCloudDialogflowCxV3ExperimentResult } from "./googleclouddialogflowcxv3experimentresult";
import { GoogleCloudDialogflowCxV3RolloutConfig } from "./googleclouddialogflowcxv3rolloutconfig";
import { GoogleCloudDialogflowCxV3RolloutState } from "./googleclouddialogflowcxv3rolloutstate";
import { GoogleCloudDialogflowCxV3VariantsHistory } from "./googleclouddialogflowcxv3variantshistory";


export enum GoogleCloudDialogflowCxV3ExperimentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Running = "RUNNING",
    Done = "DONE",
    RolloutFailed = "ROLLOUT_FAILED"
}


// GoogleCloudDialogflowCxV3Experiment
/** 
 * Represents an experiment in an environment.
**/
export class GoogleCloudDialogflowCxV3Experiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: GoogleCloudDialogflowCxV3ExperimentDefinition;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=experimentLength" })
  experimentLength?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: GoogleCloudDialogflowCxV3ExperimentResult;

  @SpeakeasyMetadata({ data: "json, name=rolloutConfig" })
  rolloutConfig?: GoogleCloudDialogflowCxV3RolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=rolloutFailureReason" })
  rolloutFailureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=rolloutState" })
  rolloutState?: GoogleCloudDialogflowCxV3RolloutState;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3ExperimentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=variantsHistory", elemType: GoogleCloudDialogflowCxV3VariantsHistory })
  variantsHistory?: GoogleCloudDialogflowCxV3VariantsHistory[];
}
