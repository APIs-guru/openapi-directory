import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicysimulatorV1beta1ReplayConfig } from "./googlecloudpolicysimulatorv1beta1replayconfig";
import { GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary } from "./googlecloudpolicysimulatorv1beta1replayresultssummary";

export enum GoogleCloudPolicysimulatorV1beta1ReplayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// GoogleCloudPolicysimulatorV1beta1Replay
/** 
 * A resource describing a `Replay`, or simulation.
**/
export class GoogleCloudPolicysimulatorV1beta1Replay extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudPolicysimulatorV1beta1ReplayConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resultsSummary" })
  resultsSummary?: GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudPolicysimulatorV1beta1ReplayStateEnum;
}
