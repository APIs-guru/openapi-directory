import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetricValueSet } from "./metricvalueset";


// QuotaInfo
/** 
 * Contains the quota information for a quota check response.
**/
export class QuotaInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=limitExceeded" })
  limitExceeded?: string[];

  @Metadata({ data: "json, name=quotaConsumed" })
  quotaConsumed?: Map<string, number>;

  @Metadata({ data: "json, name=quotaMetrics", elemType: shared.MetricValueSet })
  quotaMetrics?: MetricValueSet[];
}
