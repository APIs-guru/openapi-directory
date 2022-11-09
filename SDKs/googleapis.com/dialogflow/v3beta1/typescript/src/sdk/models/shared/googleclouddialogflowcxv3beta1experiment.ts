import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3beta1ExperimentDefinition } from "./googleclouddialogflowcxv3beta1experimentdefinition";
import { GoogleCloudDialogflowCxV3beta1ExperimentResult } from "./googleclouddialogflowcxv3beta1experimentresult";
import { GoogleCloudDialogflowCxV3beta1RolloutConfig } from "./googleclouddialogflowcxv3beta1rolloutconfig";
import { GoogleCloudDialogflowCxV3beta1RolloutState } from "./googleclouddialogflowcxv3beta1rolloutstate";
import { GoogleCloudDialogflowCxV3beta1VariantsHistory } from "./googleclouddialogflowcxv3beta1variantshistory";

export enum GoogleCloudDialogflowCxV3beta1ExperimentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Running = "RUNNING"
,    Done = "DONE"
,    RolloutFailed = "ROLLOUT_FAILED"
}


// GoogleCloudDialogflowCxV3beta1Experiment
/** 
 * Represents an experiment in an environment.
**/
export class GoogleCloudDialogflowCxV3beta1Experiment extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=definition" })
  definition?: GoogleCloudDialogflowCxV3beta1ExperimentDefinition;

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
  result?: GoogleCloudDialogflowCxV3beta1ExperimentResult;

  @Metadata({ data: "json, name=rolloutConfig" })
  rolloutConfig?: GoogleCloudDialogflowCxV3beta1RolloutConfig;

  @Metadata({ data: "json, name=rolloutFailureReason" })
  rolloutFailureReason?: string;

  @Metadata({ data: "json, name=rolloutState" })
  rolloutState?: GoogleCloudDialogflowCxV3beta1RolloutState;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudDialogflowCxV3beta1ExperimentStateEnum;

  @Metadata({ data: "json, name=variantsHistory", elemType: shared.GoogleCloudDialogflowCxV3beta1VariantsHistory })
  variantsHistory?: GoogleCloudDialogflowCxV3beta1VariantsHistory[];
}
