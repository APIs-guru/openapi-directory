import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { DataLabel } from "./datalabel";
import { LineStyle } from "./linestyle";
import { PointStyle } from "./pointstyle";
import { ChartData } from "./chartdata";
import { BasicSeriesDataPointStyleOverride } from "./basicseriesdatapointstyleoverride";


export enum BasicChartSeriesTargetAxisEnum {
    BasicChartAxisPositionUnspecified = "BASIC_CHART_AXIS_POSITION_UNSPECIFIED",
    BottomAxis = "BOTTOM_AXIS",
    LeftAxis = "LEFT_AXIS",
    RightAxis = "RIGHT_AXIS"
}

export enum BasicChartSeriesTypeEnum {
    BasicChartTypeUnspecified = "BASIC_CHART_TYPE_UNSPECIFIED",
    Bar = "BAR",
    Line = "LINE",
    Area = "AREA",
    Column = "COLUMN",
    Scatter = "SCATTER",
    Combo = "COMBO",
    SteppedArea = "STEPPED_AREA"
}


// BasicChartSeries
/** 
 * A single series of data in a chart. For example, if charting stock prices over time, multiple series may exist, one for the "Open Price", "High Price", "Low Price" and "Close Price".
**/
export class BasicChartSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: Color;

  @SpeakeasyMetadata({ data: "json, name=colorStyle" })
  colorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=dataLabel" })
  dataLabel?: DataLabel;

  @SpeakeasyMetadata({ data: "json, name=lineStyle" })
  lineStyle?: LineStyle;

  @SpeakeasyMetadata({ data: "json, name=pointStyle" })
  pointStyle?: PointStyle;

  @SpeakeasyMetadata({ data: "json, name=series" })
  series?: ChartData;

  @SpeakeasyMetadata({ data: "json, name=styleOverrides", elemType: BasicSeriesDataPointStyleOverride })
  styleOverrides?: BasicSeriesDataPointStyleOverride[];

  @SpeakeasyMetadata({ data: "json, name=targetAxis" })
  targetAxis?: BasicChartSeriesTargetAxisEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BasicChartSeriesTypeEnum;
}
