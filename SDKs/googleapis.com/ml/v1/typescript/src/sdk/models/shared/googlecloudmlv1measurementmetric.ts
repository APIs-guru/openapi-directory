import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudMlV1MeasurementMetric
/** 
 * A message representing a metric in the measurement.
**/
export class GoogleCloudMlV1MeasurementMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
