import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { ChartGroupRule } from "./chartgrouprule";
import { ChartSourceRange } from "./chartsourcerange";
export declare enum ChartDataAggregateTypeEnum {
    ChartAggregateTypeUnspecified = "CHART_AGGREGATE_TYPE_UNSPECIFIED",
    Average = "AVERAGE",
    Count = "COUNT",
    Max = "MAX",
    Median = "MEDIAN",
    Min = "MIN",
    Sum = "SUM"
}
/**
 * The data included in a domain or series.
**/
export declare class ChartData extends SpeakeasyBase {
    aggregateType?: ChartDataAggregateTypeEnum;
    columnReference?: DataSourceColumnReference;
    groupRule?: ChartGroupRule;
    sourceRange?: ChartSourceRange;
}
