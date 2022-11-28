import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
import { GoogleCloudMlV1TrialParameter } from "./googlecloudmlv1trialparameter";


export enum GoogleCloudMlV1TrialStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Requested = "REQUESTED",
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Stopping = "STOPPING"
}


// GoogleCloudMlV1TrialInput
/** 
 * A message representing a trial.
**/
export class GoogleCloudMlV1TrialInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalMeasurement" })
  finalMeasurement?: GoogleCloudMlV1Measurement;

  @SpeakeasyMetadata({ data: "json, name=measurements", elemType: GoogleCloudMlV1Measurement })
  measurements?: GoogleCloudMlV1Measurement[];

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudMlV1TrialParameter })
  parameters?: GoogleCloudMlV1TrialParameter[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1TrialStateEnum;
}


// GoogleCloudMlV1Trial
/** 
 * A message representing a trial.
**/
export class GoogleCloudMlV1Trial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=finalMeasurement" })
  finalMeasurement?: GoogleCloudMlV1Measurement;

  @SpeakeasyMetadata({ data: "json, name=infeasibleReason" })
  infeasibleReason?: string;

  @SpeakeasyMetadata({ data: "json, name=measurements", elemType: GoogleCloudMlV1Measurement })
  measurements?: GoogleCloudMlV1Measurement[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: GoogleCloudMlV1TrialParameter })
  parameters?: GoogleCloudMlV1TrialParameter[];

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1TrialStateEnum;

  @SpeakeasyMetadata({ data: "json, name=trialInfeasible" })
  trialInfeasible?: boolean;
}
