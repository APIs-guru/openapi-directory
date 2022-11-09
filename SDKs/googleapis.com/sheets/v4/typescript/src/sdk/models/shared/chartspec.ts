import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Color } from "./color";
import { ColorStyle } from "./colorstyle";
import { BasicChartSpec } from "./basicchartspec";
import { BubbleChartSpec } from "./bubblechartspec";
import { CandlestickChartSpec } from "./candlestickchartspec";
import { DataSourceChartProperties } from "./datasourcechartproperties";
import { FilterSpec } from "./filterspec";
import { HistogramChartSpec } from "./histogramchartspec";
import { OrgChartSpec } from "./orgchartspec";
import { PieChartSpec } from "./piechartspec";
import { ScorecardChartSpec } from "./scorecardchartspec";
import { SortSpec } from "./sortspec";
import { TextFormat } from "./textformat";
import { TextPosition } from "./textposition";
import { TextFormat } from "./textformat";
import { TextPosition } from "./textposition";
import { TreemapChartSpec } from "./treemapchartspec";
import { WaterfallChartSpec } from "./waterfallchartspec";

export enum ChartSpecHiddenDimensionStrategyEnum {
    ChartHiddenDimensionStrategyUnspecified = "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED"
,    SkipHiddenRowsAndColumns = "SKIP_HIDDEN_ROWS_AND_COLUMNS"
,    SkipHiddenRows = "SKIP_HIDDEN_ROWS"
,    SkipHiddenColumns = "SKIP_HIDDEN_COLUMNS"
,    ShowAll = "SHOW_ALL"
}


// ChartSpec
/** 
 * The specifications of a chart.
**/
export class ChartSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=altText" })
  altText?: string;

  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: Color;

  @Metadata({ data: "json, name=backgroundColorStyle" })
  backgroundColorStyle?: ColorStyle;

  @Metadata({ data: "json, name=basicChart" })
  basicChart?: BasicChartSpec;

  @Metadata({ data: "json, name=bubbleChart" })
  bubbleChart?: BubbleChartSpec;

  @Metadata({ data: "json, name=candlestickChart" })
  candlestickChart?: CandlestickChartSpec;

  @Metadata({ data: "json, name=dataSourceChartProperties" })
  dataSourceChartProperties?: DataSourceChartProperties;

  @Metadata({ data: "json, name=filterSpecs", elemType: shared.FilterSpec })
  filterSpecs?: FilterSpec[];

  @Metadata({ data: "json, name=fontName" })
  fontName?: string;

  @Metadata({ data: "json, name=hiddenDimensionStrategy" })
  hiddenDimensionStrategy?: ChartSpecHiddenDimensionStrategyEnum;

  @Metadata({ data: "json, name=histogramChart" })
  histogramChart?: HistogramChartSpec;

  @Metadata({ data: "json, name=maximized" })
  maximized?: boolean;

  @Metadata({ data: "json, name=orgChart" })
  orgChart?: OrgChartSpec;

  @Metadata({ data: "json, name=pieChart" })
  pieChart?: PieChartSpec;

  @Metadata({ data: "json, name=scorecardChart" })
  scorecardChart?: ScorecardChartSpec;

  @Metadata({ data: "json, name=sortSpecs", elemType: shared.SortSpec })
  sortSpecs?: SortSpec[];

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=subtitleTextFormat" })
  subtitleTextFormat?: TextFormat;

  @Metadata({ data: "json, name=subtitleTextPosition" })
  subtitleTextPosition?: TextPosition;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=titleTextFormat" })
  titleTextFormat?: TextFormat;

  @Metadata({ data: "json, name=titleTextPosition" })
  titleTextPosition?: TextPosition;

  @Metadata({ data: "json, name=treemapChart" })
  treemapChart?: TreemapChartSpec;

  @Metadata({ data: "json, name=waterfallChart" })
  waterfallChart?: WaterfallChartSpec;
}
