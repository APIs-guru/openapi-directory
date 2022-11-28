import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";



// GoogleCloudMlV1CompleteTrialRequest
/** 
 * The request message for the CompleteTrial service method.
**/
export class GoogleCloudMlV1CompleteTrialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalMeasurement" })
  finalMeasurement?: GoogleCloudMlV1Measurement;

  @SpeakeasyMetadata({ data: "json, name=infeasibleReason" })
  infeasibleReason?: string;

  @SpeakeasyMetadata({ data: "json, name=trialInfeasible" })
  trialInfeasible?: boolean;
}
