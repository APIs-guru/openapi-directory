import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1MeasurementMetric } from "./googlecloudmlv1measurementmetric";



// GoogleCloudMlV1Measurement
/** 
 * A message representing a measurement.
**/
export class GoogleCloudMlV1Measurement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elapsedTime" })
  elapsedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudMlV1MeasurementMetric })
  metrics?: GoogleCloudMlV1MeasurementMetric[];

  @SpeakeasyMetadata({ data: "json, name=stepCount" })
  stepCount?: string;
}
