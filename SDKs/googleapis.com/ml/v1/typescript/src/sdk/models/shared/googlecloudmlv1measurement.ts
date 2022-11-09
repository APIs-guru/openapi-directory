import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudMlV1MeasurementMetric } from "./googlecloudmlv1measurementmetric";


// GoogleCloudMlV1Measurement
/** 
 * A message representing a measurement.
**/
export class GoogleCloudMlV1Measurement extends SpeakeasyBase {
  @Metadata({ data: "json, name=elapsedTime" })
  elapsedTime?: string;

  @Metadata({ data: "json, name=metrics", elemType: shared.GoogleCloudMlV1MeasurementMetric })
  metrics?: GoogleCloudMlV1MeasurementMetric[];

  @Metadata({ data: "json, name=stepCount" })
  stepCount?: string;
}
