import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";
import { DerivedMetric } from "./derivedmetric";
import { IndexedHotKey } from "./indexedhotkey";
import { IndexedKeyRangeInfos } from "./indexedkeyrangeinfos";
import { MetricMatrix } from "./metricmatrix";
export declare enum MetricAggregationEnum {
    AggregationUnspecified = "AGGREGATION_UNSPECIFIED",
    Max = "MAX",
    Sum = "SUM"
}
/**
 * A message representing the actual monitoring data, values for each key bucket over time, of a metric.
**/
export declare class Metric extends SpeakeasyBase {
    aggregation?: MetricAggregationEnum;
    category?: LocalizedString;
    derived?: DerivedMetric;
    displayLabel?: LocalizedString;
    hasNonzeroData?: boolean;
    hotValue?: number;
    indexedHotKeys?: Map<string, IndexedHotKey>;
    indexedKeyRangeInfos?: Map<string, IndexedKeyRangeInfos>;
    info?: LocalizedString;
    matrix?: MetricMatrix;
    unit?: LocalizedString;
    visible?: boolean;
}
