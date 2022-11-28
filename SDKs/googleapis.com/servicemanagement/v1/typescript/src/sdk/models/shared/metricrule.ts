import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MetricRule
/** 
 * Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.
**/
export class MetricRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metricCosts" })
  metricCosts?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;
}
