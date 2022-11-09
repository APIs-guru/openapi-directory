import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
import { GoogleCloudMlV1TrialParameter } from "./googlecloudmlv1trialparameter";

export enum GoogleCloudMlV1TrialStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Requested = "REQUESTED"
,    Active = "ACTIVE"
,    Completed = "COMPLETED"
,    Stopping = "STOPPING"
}


// GoogleCloudMlV1Trial
/** 
 * A message representing a trial.
**/
export class GoogleCloudMlV1Trial extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=finalMeasurement" })
  finalMeasurement?: GoogleCloudMlV1Measurement;

  @Metadata({ data: "json, name=infeasibleReason" })
  infeasibleReason?: string;

  @Metadata({ data: "json, name=measurements", elemType: shared.GoogleCloudMlV1Measurement })
  measurements?: GoogleCloudMlV1Measurement[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.GoogleCloudMlV1TrialParameter })
  parameters?: GoogleCloudMlV1TrialParameter[];

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1TrialStateEnum;

  @Metadata({ data: "json, name=trialInfeasible" })
  trialInfeasible?: boolean;
}
