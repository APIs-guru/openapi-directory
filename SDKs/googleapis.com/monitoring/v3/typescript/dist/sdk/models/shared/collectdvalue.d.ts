import { SpeakeasyBase } from "../../../internal/utils";
import { TypedValue } from "./typedvalue";
export declare enum CollectdValueDataSourceTypeEnum {
    UnspecifiedDataSourceType = "UNSPECIFIED_DATA_SOURCE_TYPE",
    Gauge = "GAUGE",
    Counter = "COUNTER",
    Derive = "DERIVE",
    Absolute = "ABSOLUTE"
}
/**
 * A single data point from a collectd-based plugin.
**/
export declare class CollectdValue extends SpeakeasyBase {
    dataSourceName?: string;
    dataSourceType?: CollectdValueDataSourceTypeEnum;
    value?: TypedValue;
}
