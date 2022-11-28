import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A specific metric, identified by specifying values for all of the labels of a MetricDescriptor.
**/
export declare class Metric extends SpeakeasyBase {
    labels?: Map<string, string>;
    type?: string;
}
