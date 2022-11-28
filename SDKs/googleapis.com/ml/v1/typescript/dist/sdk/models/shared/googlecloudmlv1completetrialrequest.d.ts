import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";
/**
 * The request message for the CompleteTrial service method.
**/
export declare class GoogleCloudMlV1CompleteTrialRequest extends SpeakeasyBase {
    finalMeasurement?: GoogleCloudMlV1Measurement;
    infeasibleReason?: string;
    trialInfeasible?: boolean;
}
