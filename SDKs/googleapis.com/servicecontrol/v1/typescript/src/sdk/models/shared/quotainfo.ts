import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetricValueSet } from "./metricvalueset";



// QuotaInfo
/** 
 * Contains the quota information for a quota check response.
**/
export class QuotaInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limitExceeded" })
  limitExceeded?: string[];

  @SpeakeasyMetadata({ data: "json, name=quotaConsumed" })
  quotaConsumed?: Map<string, number>;

  @SpeakeasyMetadata({ data: "json, name=quotaMetrics", elemType: MetricValueSet })
  quotaMetrics?: MetricValueSet[];
}
