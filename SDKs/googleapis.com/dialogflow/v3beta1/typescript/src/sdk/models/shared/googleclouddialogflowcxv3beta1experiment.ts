import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentDefinition } from "./googleclouddialogflowcxv3beta1experimentdefinition";
import { GoogleCloudDialogflowCxV3beta1ExperimentResult } from "./googleclouddialogflowcxv3beta1experimentresult";
import { GoogleCloudDialogflowCxV3beta1RolloutConfig } from "./googleclouddialogflowcxv3beta1rolloutconfig";
import { GoogleCloudDialogflowCxV3beta1RolloutState } from "./googleclouddialogflowcxv3beta1rolloutstate";
import { GoogleCloudDialogflowCxV3beta1VariantsHistory } from "./googleclouddialogflowcxv3beta1variantshistory";


export enum GoogleCloudDialogflowCxV3beta1ExperimentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Running = "RUNNING",
    Done = "DONE",
    RolloutFailed = "ROLLOUT_FAILED"
}


// GoogleCloudDialogflowCxV3beta1Experiment
/** 
 * Represents an experiment in an environment.
**/
export class GoogleCloudDialogflowCxV3beta1Experiment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: GoogleCloudDialogflowCxV3beta1ExperimentDefinition;

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
  result?: GoogleCloudDialogflowCxV3beta1ExperimentResult;

  @SpeakeasyMetadata({ data: "json, name=rolloutConfig" })
  rolloutConfig?: GoogleCloudDialogflowCxV3beta1RolloutConfig;

  @SpeakeasyMetadata({ data: "json, name=rolloutFailureReason" })
  rolloutFailureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=rolloutState" })
  rolloutState?: GoogleCloudDialogflowCxV3beta1RolloutState;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3beta1ExperimentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=variantsHistory", elemType: GoogleCloudDialogflowCxV3beta1VariantsHistory })
  variantsHistory?: GoogleCloudDialogflowCxV3beta1VariantsHistory[];
}
