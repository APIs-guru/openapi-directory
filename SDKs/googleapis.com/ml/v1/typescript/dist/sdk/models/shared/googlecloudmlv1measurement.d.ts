import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1MeasurementMetric } from "./googlecloudmlv1measurementmetric";
/**
 * A message representing a measurement.
**/
export declare class GoogleCloudMlV1Measurement extends SpeakeasyBase {
    elapsedTime?: string;
    metrics?: GoogleCloudMlV1MeasurementMetric[];
    stepCount?: string;
}
