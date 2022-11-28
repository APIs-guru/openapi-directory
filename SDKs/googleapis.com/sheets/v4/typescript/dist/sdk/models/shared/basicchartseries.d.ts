import { SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { DataLabel } from "./datalabel";
import { LineStyle } from "./linestyle";
import { PointStyle } from "./pointstyle";
import { ChartData } from "./chartdata";
import { BasicSeriesDataPointStyleOverride } from "./basicseriesdatapointstyleoverride";
export declare enum BasicChartSeriesTargetAxisEnum {
    BasicChartAxisPositionUnspecified = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
    BottomAxis = "BOTTOM_AXIS",
    LeftAxis = "LEFT_AXIS",
    RightAxis = "RIGHT_AXIS"
}
export declare enum BasicChartSeriesTypeEnum {
    BasicChartTypeUnspecified = "BASIC_CHART_TYPE_UNSPECIFIED",
    Bar = "BAR",
    Line = "LINE",
    Area = "AREA",
    Column = "COLUMN",
    Scatter = "SCATTER",
    Combo = "COMBO",
    SteppedArea = "STEPPED_AREA"
}
/**
 * A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price".
**/
export declare class BasicChartSeries extends SpeakeasyBase {
    color?: Color;
    colorStyle?: ColorStyle;
    dataLabel?: DataLabel;
    lineStyle?: LineStyle;
    pointStyle?: PointStyle;
    series?: ChartData;
    styleOverrides?: BasicSeriesDataPointStyleOverride[];
    targetAxis?: BasicChartSeriesTargetAxisEnum;
    type?: BasicChartSeriesTypeEnum;
}
