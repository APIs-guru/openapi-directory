import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";


// GoogleCloudMlV1AddTrialMeasurementRequest
/** 
 * The request message for the AddTrialMeasurement service method.
**/
export class GoogleCloudMlV1AddTrialMeasurementRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=measurement" })
  measurement?: GoogleCloudMlV1Measurement;
}
