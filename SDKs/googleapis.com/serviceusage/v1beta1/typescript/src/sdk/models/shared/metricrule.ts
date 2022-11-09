import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MetricRule
/** 
 * Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.
**/
export class MetricRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=metricCosts" })
  metricCosts?: Map<string, string>;

  @Metadata({ data: "json, name=selector" })
  selector?: string;
}
