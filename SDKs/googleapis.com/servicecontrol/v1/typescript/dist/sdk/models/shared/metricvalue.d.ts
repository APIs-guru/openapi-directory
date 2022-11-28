import { SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
import { Money } from "./money";
/**
 * Represents a single metric value.
**/
export declare class MetricValue extends SpeakeasyBase {
    boolValue?: boolean;
    distributionValue?: Distribution;
    doubleValue?: number;
    endTime?: string;
    int64Value?: string;
    labels?: Map<string, string>;
    moneyValue?: Money;
    startTime?: string;
    stringValue?: string;
}
