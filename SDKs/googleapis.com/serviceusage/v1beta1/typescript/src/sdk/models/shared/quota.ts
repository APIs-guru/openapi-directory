import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QuotaLimit } from "./quotalimit";
import { MetricRule } from "./metricrule";



// Quota
/** 
 * Quota configuration helps to achieve fairness and budgeting in service usage. The metric based quota configuration works this way: - The service configuration defines a set of metrics. - For API calls, the quota.metric_rules maps methods to metrics with corresponding costs. - The quota.limits defines limits on the metrics, which will be used for quota checks at runtime. An example quota configuration in yaml format: quota: limits: - name: apiWriteQpsPerProject metric: library.googleapis.com/write_calls unit: "1/min/{project}" # rate limit for consumer projects values: STANDARD: 10000 (The metric rules bind all methods to the read_calls metric, except for the UpdateBook and DeleteBook methods. These two methods are mapped to the write_calls metric, with the UpdateBook method consuming at twice rate as the DeleteBook method.) metric_rules: - selector: "*" metric_costs: library.googleapis.com/read_calls: 1 - selector: google.example.library.v1.LibraryService.UpdateBook metric_costs: library.googleapis.com/write_calls: 2 - selector: google.example.library.v1.LibraryService.DeleteBook metric_costs: library.googleapis.com/write_calls: 1 Corresponding Metric definition: metrics: - name: library.googleapis.com/read_calls display_name: Read requests metric_kind: DELTA value_type: INT64 - name: library.googleapis.com/write_calls display_name: Write requests metric_kind: DELTA value_type: INT64 
**/
export class Quota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=limits", elemType: QuotaLimit })
  limits?: QuotaLimit[];

  @SpeakeasyMetadata({ data: "json, name=metricRules", elemType: MetricRule })
  metricRules?: MetricRule[];
}
