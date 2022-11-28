import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
import { GoogleCloudMlV1TrialParameter } from "./googlecloudmlv1trialparameter";
export declare enum GoogleCloudMlV1TrialStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Requested = "REQUESTED",
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Stopping = "STOPPING"
}
/**
 * A message representing a trial.
**/
export declare class GoogleCloudMlV1TrialInput extends SpeakeasyBase {
    finalMeasurement?: GoogleCloudMlV1Measurement;
    measurements?: GoogleCloudMlV1Measurement[];
    parameters?: GoogleCloudMlV1TrialParameter[];
    state?: GoogleCloudMlV1TrialStateEnum;
}
/**
 * A message representing a trial.
**/
export declare class GoogleCloudMlV1Trial extends SpeakeasyBase {
    clientId?: string;
    endTime?: string;
    finalMeasurement?: GoogleCloudMlV1Measurement;
    infeasibleReason?: string;
    measurements?: GoogleCloudMlV1Measurement[];
    name?: string;
    parameters?: GoogleCloudMlV1TrialParameter[];
    startTime?: string;
    state?: GoogleCloudMlV1TrialStateEnum;
    trialInfeasible?: boolean;
}
