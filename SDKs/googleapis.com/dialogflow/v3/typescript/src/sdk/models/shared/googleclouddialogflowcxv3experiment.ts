import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3ExperimentDefinition } from "./googleclouddialogflowcxv3experimentdefinition";
import { GoogleCloudDialogflowCxV3ExperimentResult } from "./googleclouddialogflowcxv3experimentresult";
import { GoogleCloudDialogflowCxV3RolloutConfig } from "./googleclouddialogflowcxv3rolloutconfig";
import { GoogleCloudDialogflowCxV3RolloutState } from "./googleclouddialogflowcxv3rolloutstate";
import { GoogleCloudDialogflowCxV3VariantsHistory } from "./googleclouddialogflowcxv3variantshistory";

export enum GoogleCloudDialogflowCxV3ExperimentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Running = "RUNNING"
,    Done = "DONE"
,    RolloutFailed = "ROLLOUT_FAILED"
}


// GoogleCloudDialogflowCxV3Experiment
/** 
 * Represents an experiment in an environment.
**/
export class GoogleCloudDialogflowCxV3Experiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=definition" })
  definition?: GoogleCloudDialogflowCxV3ExperimentDefinition;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=experimentLength" })
  experimentLength?: string;

  @Metadata({ data: "json, name=lastUpdateTime" })
  lastUpdateTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=result" })
  result?: GoogleCloudDialogflowCxV3ExperimentResult;

  @Metadata({ data: "json, name=rolloutConfig" })
  rolloutConfig?: GoogleCloudDialogflowCxV3RolloutConfig;

  @Metadata({ data: "json, name=rolloutFailureReason" })
  rolloutFailureReason?: string;

  @Metadata({ data: "json, name=rolloutState" })
  rolloutState?: GoogleCloudDialogflowCxV3RolloutState;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3ExperimentStateEnum;

  @Metadata({ data: "json, name=variantsHistory", elemType: shared.GoogleCloudDialogflowCxV3VariantsHistory })
  variantsHistory?: GoogleCloudDialogflowCxV3VariantsHistory[];
}
