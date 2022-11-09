import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PerformanceThreshold } from "./performancethreshold";
import { MetricRange } from "./metricrange";
import { MetricRange } from "./metricrange";


// WindowsBasedSli
/** 
 * A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
**/
export class WindowsBasedSli extends SpeakeasyBase {
  @Metadata({ data: "json, name=goodBadMetricFilter" })
  goodBadMetricFilter?: string;

  @Metadata({ data: "json, name=goodTotalRatioThreshold" })
  goodTotalRatioThreshold?: PerformanceThreshold;

  @Metadata({ data: "json, name=metricMeanInRange" })
  metricMeanInRange?: MetricRange;

  @Metadata({ data: "json, name=metricSumInRange" })
  metricSumInRange?: MetricRange;

  @Metadata({ data: "json, name=windowPeriod" })
  windowPeriod?: string;
}
