import { SpeakeasyBase } from "../../../internal/utils";
import { MetricValueSet } from "./metricvalueset";
/**
 * Contains the quota information for a quota check response.
**/
export declare class QuotaInfo extends SpeakeasyBase {
    limitExceeded?: string[];
    quotaConsumed?: Map<string, number>;
    quotaMetrics?: MetricValueSet[];
}
