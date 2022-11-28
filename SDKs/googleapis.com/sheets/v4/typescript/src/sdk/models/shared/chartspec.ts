import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
import { TreemapChartSpec } from "./treemapchartspec";
import { WaterfallChartSpec } from "./waterfallchartspec";


export enum ChartSpecHiddenDimensionStrategyEnum {
    ChartHiddenDimensionStrategyUnspecified = "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED",
    SkipHiddenRowsAndColumns = "SKIP_HIDDEN_ROWS_AND_COLUMNS",
    SkipHiddenRows = "SKIP_HIDDEN_ROWS",
    SkipHiddenColumns = "SKIP_HIDDEN_COLUMNS",
    ShowAll = "SHOW_ALL"
}


// ChartSpec
/** 
 * The specifications of a chart.
**/
export class ChartSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altText" })
  altText?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundColor" })
  backgroundColor?: Color;

  @SpeakeasyMetadata({ data: "json, name=backgroundColorStyle" })
  backgroundColorStyle?: ColorStyle;

  @SpeakeasyMetadata({ data: "json, name=basicChart" })
  basicChart?: BasicChartSpec;

  @SpeakeasyMetadata({ data: "json, name=bubbleChart" })
  bubbleChart?: BubbleChartSpec;

  @SpeakeasyMetadata({ data: "json, name=candlestickChart" })
  candlestickChart?: CandlestickChartSpec;

  @SpeakeasyMetadata({ data: "json, name=dataSourceChartProperties" })
  dataSourceChartProperties?: DataSourceChartProperties;

  @SpeakeasyMetadata({ data: "json, name=filterSpecs", elemType: FilterSpec })
  filterSpecs?: FilterSpec[];

  @SpeakeasyMetadata({ data: "json, name=fontName" })
  fontName?: string;

  @SpeakeasyMetadata({ data: "json, name=hiddenDimensionStrategy" })
  hiddenDimensionStrategy?: ChartSpecHiddenDimensionStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=histogramChart" })
  histogramChart?: HistogramChartSpec;

  @SpeakeasyMetadata({ data: "json, name=maximized" })
  maximized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=orgChart" })
  orgChart?: OrgChartSpec;

  @SpeakeasyMetadata({ data: "json, name=pieChart" })
  pieChart?: PieChartSpec;

  @SpeakeasyMetadata({ data: "json, name=scorecardChart" })
  scorecardChart?: ScorecardChartSpec;

  @SpeakeasyMetadata({ data: "json, name=sortSpecs", elemType: SortSpec })
  sortSpecs?: SortSpec[];

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitleTextFormat" })
  subtitleTextFormat?: TextFormat;

  @SpeakeasyMetadata({ data: "json, name=subtitleTextPosition" })
  subtitleTextPosition?: TextPosition;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=titleTextFormat" })
  titleTextFormat?: TextFormat;

  @SpeakeasyMetadata({ data: "json, name=titleTextPosition" })
  titleTextPosition?: TextPosition;

  @SpeakeasyMetadata({ data: "json, name=treemapChart" })
  treemapChart?: TreemapChartSpec;

  @SpeakeasyMetadata({ data: "json, name=waterfallChart" })
  waterfallChart?: WaterfallChartSpec;
}
