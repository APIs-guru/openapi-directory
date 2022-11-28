import { SpeakeasyBase } from "../../../internal/utils";
import { BasicChartAxis } from "./basicchartaxis";
import { BasicChartDomain } from "./basicchartdomain";
import { BasicChartSeries } from "./basicchartseries";
import { DataLabel } from "./datalabel";
export declare enum BasicChartSpecChartTypeEnum {
    BasicChartTypeUnspecified = "BASIC_CHART_TYPE_UNSPECIFIED",
    Bar = "BAR",
    Line = "LINE",
    Area = "AREA",
    Column = "COLUMN",
    Scatter = "SCATTER",
    Combo = "COMBO",
    SteppedArea = "STEPPED_AREA"
}
export declare enum BasicChartSpecCompareModeEnum {
    BasicChartCompareModeUnspecified = "BASIC_CHART_COMPARE_MODE_UNSPECIFIED",
    Datum = "DATUM",
    Category = "CATEGORY"
}
export declare enum BasicChartSpecLegendPositionEnum {
    BasicChartLegendPositionUnspecified = "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND"
}
export declare enum BasicChartSpecStackedTypeEnum {
    BasicChartStackedTypeUnspecified = "BASIC_CHART_STACKED_TYPE_UNSPECIFIED",
    NotStacked = "NOT_STACKED",
    Stacked = "STACKED",
    PercentStacked = "PERCENT_STACKED"
}
/**
 * The specification for a basic chart. See BasicChartType for the list of charts this supports.
**/
export declare class BasicChartSpec extends SpeakeasyBase {
    axis?: BasicChartAxis[];
    chartType?: BasicChartSpecChartTypeEnum;
    compareMode?: BasicChartSpecCompareModeEnum;
    domains?: BasicChartDomain[];
    headerCount?: number;
    interpolateNulls?: boolean;
    legendPosition?: BasicChartSpecLegendPositionEnum;
    lineSmoothing?: boolean;
    series?: BasicChartSeries[];
    stackedType?: BasicChartSpecStackedTypeEnum;
    threeDimensional?: boolean;
    totalDataLabel?: DataLabel;
}
