import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Bind API methods to metrics. Binding a method to a metric causes that metric's configured quota behaviors to apply to the method call.
**/
export declare class MetricRule extends SpeakeasyBase {
    metricCosts?: Map<string, string>;
    selector?: string;
}
