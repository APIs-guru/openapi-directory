import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudPolicysimulatorV1ReplayConfig } from "./googlecloudpolicysimulatorv1replayconfig";
import { GoogleCloudPolicysimulatorV1ReplayResultsSummary } from "./googlecloudpolicysimulatorv1replayresultssummary";

export enum GoogleCloudPolicysimulatorV1ReplayStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// GoogleCloudPolicysimulatorV1Replay
/** 
 * A resource describing a `Replay`, or simulation.
**/
export class GoogleCloudPolicysimulatorV1Replay extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: GoogleCloudPolicysimulatorV1ReplayConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resultsSummary" })
  resultsSummary?: GoogleCloudPolicysimulatorV1ReplayResultsSummary;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudPolicysimulatorV1ReplayStateEnum;
}
