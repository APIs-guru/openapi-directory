import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BasicChartAxis } from "./basicchartaxis";
import { BasicChartDomain } from "./basicchartdomain";
import { BasicChartSeries } from "./basicchartseries";
import { DataLabel } from "./datalabel";


export enum BasicChartSpecChartTypeEnum {
    BasicChartTypeUnspecified = "BASIC_CHART_TYPE_UNSPECIFIED",
    Bar = "BAR",
    Line = "LINE",
    Area = "AREA",
    Column = "COLUMN",
    Scatter = "SCATTER",
    Combo = "COMBO",
    SteppedArea = "STEPPED_AREA"
}

export enum BasicChartSpecCompareModeEnum {
    BasicChartCompareModeUnspecified = "BASIC_CHART_COMPARE_MODE_UNSPECIFIED",
    Datum = "DATUM",
    Category = "CATEGORY"
}

export enum BasicChartSpecLegendPositionEnum {
    BasicChartLegendPositionUnspecified = "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED",
    BottomLegend = "BOTTOM_LEGEND",
    LeftLegend = "LEFT_LEGEND",
    RightLegend = "RIGHT_LEGEND",
    TopLegend = "TOP_LEGEND",
    NoLegend = "NO_LEGEND"
}

export enum BasicChartSpecStackedTypeEnum {
    BasicChartStackedTypeUnspecified = "BASIC_CHART_STACKED_TYPE_UNSPECIFIED",
    NotStacked = "NOT_STACKED",
    Stacked = "STACKED",
    PercentStacked = "PERCENT_STACKED"
}


// BasicChartSpec
/** 
 * The specification for a basic chart. See BasicChartType for the list of charts this supports.
**/
export class BasicChartSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=axis", elemType: BasicChartAxis })
  axis?: BasicChartAxis[];

  @SpeakeasyMetadata({ data: "json, name=chartType" })
  chartType?: BasicChartSpecChartTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=compareMode" })
  compareMode?: BasicChartSpecCompareModeEnum;

  @SpeakeasyMetadata({ data: "json, name=domains", elemType: BasicChartDomain })
  domains?: BasicChartDomain[];

  @SpeakeasyMetadata({ data: "json, name=headerCount" })
  headerCount?: number;

  @SpeakeasyMetadata({ data: "json, name=interpolateNulls" })
  interpolateNulls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=legendPosition" })
  legendPosition?: BasicChartSpecLegendPositionEnum;

  @SpeakeasyMetadata({ data: "json, name=lineSmoothing" })
  lineSmoothing?: boolean;

  @SpeakeasyMetadata({ data: "json, name=series", elemType: BasicChartSeries })
  series?: BasicChartSeries[];

  @SpeakeasyMetadata({ data: "json, name=stackedType" })
  stackedType?: BasicChartSpecStackedTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=threeDimensional" })
  threeDimensional?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalDataLabel" })
  totalDataLabel?: DataLabel;
}
