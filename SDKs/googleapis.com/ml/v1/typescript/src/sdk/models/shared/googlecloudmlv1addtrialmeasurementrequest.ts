import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Measurement } from "./googlecloudmlv1measurement";



// GoogleCloudMlV1AddTrialMeasurementRequest
/** 
 * The request message for the AddTrialMeasurement service method.
**/
export class GoogleCloudMlV1AddTrialMeasurementRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=measurement" })
  measurement?: GoogleCloudMlV1Measurement;
}
