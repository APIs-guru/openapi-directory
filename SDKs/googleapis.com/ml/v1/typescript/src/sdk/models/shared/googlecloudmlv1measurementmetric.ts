import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudMlV1MeasurementMetric
/** 
 * A message representing a metric in the measurement.
**/
export class GoogleCloudMlV1MeasurementMetric extends SpeakeasyBase {
  @Metadata({ data: "json, name=metric" })
  metric?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
