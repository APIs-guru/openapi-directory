import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceThreshold } from "./performancethreshold";
import { MetricRange } from "./metricrange";
/**
 * A WindowsBasedSli defines good_service as the count of time windows for which the provided service was of good quality. Criteria for determining if service was good are embedded in the window_criterion.
**/
export declare class WindowsBasedSli extends SpeakeasyBase {
    goodBadMetricFilter?: string;
    goodTotalRatioThreshold?: PerformanceThreshold;
    metricMeanInRange?: MetricRange;
    metricSumInRange?: MetricRange;
    windowPeriod?: string;
}
