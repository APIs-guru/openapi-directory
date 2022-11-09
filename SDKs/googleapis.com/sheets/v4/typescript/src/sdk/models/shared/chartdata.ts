import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
import { ChartGroupRule } from "./chartgrouprule";
import { ChartSourceRange } from "./chartsourcerange";

export enum ChartDataAggregateTypeEnum {
    ChartAggregateTypeUnspecified = "CHART_AGGREGATE_TYPE_UNSPECIFIED"
,    Average = "AVERAGE"
,    Count = "COUNT"
,    Max = "MAX"
,    Median = "MEDIAN"
,    Min = "MIN"
,    Sum = "SUM"
}


// ChartData
/** 
 * The data included in a domain or series.
**/
export class ChartData extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregateType" })
  aggregateType?: ChartDataAggregateTypeEnum;

  @Metadata({ data: "json, name=columnReference" })
  columnReference?: DataSourceColumnReference;

  @Metadata({ data: "json, name=groupRule" })
  groupRule?: ChartGroupRule;

  @Metadata({ data: "json, name=sourceRange" })
  sourceRange?: ChartSourceRange;
}
