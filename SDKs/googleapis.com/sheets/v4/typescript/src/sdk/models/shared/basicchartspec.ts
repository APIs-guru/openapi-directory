import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BasicChartAxis } from "./basicchartaxis";
import { BasicChartDomain } from "./basicchartdomain";
import { BasicChartSeries } from "./basicchartseries";
import { DataLabel } from "./datalabel";

export enum BasicChartSpecChartTypeEnum {
    BasicChartTypeUnspecified = "BASIC_CHART_TYPE_UNSPECIFIED"
,    Bar = "BAR"
,    Line = "LINE"
,    Area = "AREA"
,    Column = "COLUMN"
,    Scatter = "SCATTER"
,    Combo = "COMBO"
,    SteppedArea = "STEPPED_AREA"
}

export enum BasicChartSpecCompareModeEnum {
    BasicChartCompareModeUnspecified = "BASIC_CHART_COMPARE_MODE_UNSPECIFIED"
,    Datum = "DATUM"
,    Category = "CATEGORY"
}

export enum BasicChartSpecLegendPositionEnum {
    BasicChartLegendPositionUnspecified = "BASIC_CHART_LEGEND_POSITION_UNSPECIFIED"
,    BottomLegend = "BOTTOM_LEGEND"
,    LeftLegend = "LEFT_LEGEND"
,    RightLegend = "RIGHT_LEGEND"
,    TopLegend = "TOP_LEGEND"
,    NoLegend = "NO_LEGEND"
}

export enum BasicChartSpecStackedTypeEnum {
    BasicChartStackedTypeUnspecified = "BASIC_CHART_STACKED_TYPE_UNSPECIFIED"
,    NotStacked = "NOT_STACKED"
,    Stacked = "STACKED"
,    PercentStacked = "PERCENT_STACKED"
}


// BasicChartSpec
/** 
 * The specification for a basic chart. See BasicChartType for the list of charts this supports.
**/
export class BasicChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=axis", elemType: shared.BasicChartAxis })
  axis?: BasicChartAxis[];

  @Metadata({ data: "json, name=chartType" })
  chartType?: BasicChartSpecChartTypeEnum;

  @Metadata({ data: "json, name=compareMode" })
  compareMode?: BasicChartSpecCompareModeEnum;

  @Metadata({ data: "json, name=domains", elemType: shared.BasicChartDomain })
  domains?: BasicChartDomain[];

  @Metadata({ data: "json, name=headerCount" })
  headerCount?: number;

  @Metadata({ data: "json, name=interpolateNulls" })
  interpolateNulls?: boolean;

  @Metadata({ data: "json, name=legendPosition" })
  legendPosition?: BasicChartSpecLegendPositionEnum;

  @Metadata({ data: "json, name=lineSmoothing" })
  lineSmoothing?: boolean;

  @Metadata({ data: "json, name=series", elemType: shared.BasicChartSeries })
  series?: BasicChartSeries[];

  @Metadata({ data: "json, name=stackedType" })
  stackedType?: BasicChartSpecStackedTypeEnum;

  @Metadata({ data: "json, name=threeDimensional" })
  threeDimensional?: boolean;

  @Metadata({ data: "json, name=totalDataLabel" })
  totalDataLabel?: DataLabel;
}
