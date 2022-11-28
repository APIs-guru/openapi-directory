import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerformanceThreshold } from "./performancethreshold";
import { MetricRange } from "./metricrange";



// WindowsBasedSli
/** 
 * A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
**/
export class WindowsBasedSli extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=goodBadMetricFilter" })
  goodBadMetricFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=goodTotalRatioThreshold" })
  goodTotalRatioThreshold?: PerformanceThreshold;

  @SpeakeasyMetadata({ data: "json, name=metricMeanInRange" })
  metricMeanInRange?: MetricRange;

  @SpeakeasyMetadata({ data: "json, name=metricSumInRange" })
  metricSumInRange?: MetricRange;

  @SpeakeasyMetadata({ data: "json, name=windowPeriod" })
  windowPeriod?: string;
}
