import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";


// GoogleCloudMlV1CompleteTrialRequest
/** 
 * The request message for the CompleteTrial service method.
**/
export class GoogleCloudMlV1CompleteTrialRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=finalMeasurement" })
  finalMeasurement?: GoogleCloudMlV1Measurement;

  @Metadata({ data: "json, name=infeasibleReason" })
  infeasibleReason?: string;

  @Metadata({ data: "json, name=trialInfeasible" })
  trialInfeasible?: boolean;
}
