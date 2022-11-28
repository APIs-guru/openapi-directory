import { SpeakeasyBase } from "../../../internal/utils";
import { ChartData } from "./chartdata";
import { BaselineValueFormat } from "./baselinevalueformat";
import { ChartCustomNumberFormatOptions } from "./chartcustomnumberformatoptions";
import { KeyValueFormat } from "./keyvalueformat";
export declare enum ScorecardChartSpecAggregateTypeEnum {
    ChartAggregateTypeUnspecified = "CHART_AGGREGATE_TYPE_UNSPECIFIED",
    Average = "AVERAGE",
    Count = "COUNT",
    Max = "MAX",
    Median = "MEDIAN",
    Min = "MIN",
    Sum = "SUM"
}
export declare enum ScorecardChartSpecNumberFormatSourceEnum {
    ChartNumberFormatSourceUndefined = "CHART_NUMBER_FORMAT_SOURCE_UNDEFINED",
    FromData = "FROM_DATA",
    Custom = "CUSTOM"
}
/**
 * A scorecard chart. Scorecard charts are used to highlight key performance indicators, known as KPIs, on the spreadsheet. A scorecard chart can represent things like total sales, average cost, or a top selling item. You can specify a single data value, or aggregate over a range of data. Percentage or absolute difference from a baseline value can be highlighted, like changes over time.
**/
export declare class ScorecardChartSpec extends SpeakeasyBase {
    aggregateType?: ScorecardChartSpecAggregateTypeEnum;
    baselineValueData?: ChartData;
    baselineValueFormat?: BaselineValueFormat;
    customFormatOptions?: ChartCustomNumberFormatOptions;
    keyValueData?: ChartData;
    keyValueFormat?: KeyValueFormat;
    numberFormatSource?: ScorecardChartSpecNumberFormatSourceEnum;
    scaleFactor?: number;
}
