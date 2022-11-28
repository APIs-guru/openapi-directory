import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum ChartSpecHiddenDimensionStrategyEnum {
    ChartHiddenDimensionStrategyUnspecified = "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED",
    SkipHiddenRowsAndColumns = "SKIP_HIDDEN_ROWS_AND_COLUMNS",
    SkipHiddenRows = "SKIP_HIDDEN_ROWS",
    SkipHiddenColumns = "SKIP_HIDDEN_COLUMNS",
    ShowAll = "SHOW_ALL"
}
/**
 * The specifications of a chart.
**/
export declare class ChartSpec extends SpeakeasyBase {
    altText?: string;
    backgroundColor?: Color;
    backgroundColorStyle?: ColorStyle;
    basicChart?: BasicChartSpec;
    bubbleChart?: BubbleChartSpec;
    candlestickChart?: CandlestickChartSpec;
    dataSourceChartProperties?: DataSourceChartProperties;
    filterSpecs?: FilterSpec[];
    fontName?: string;
    hiddenDimensionStrategy?: ChartSpecHiddenDimensionStrategyEnum;
    histogramChart?: HistogramChartSpec;
    maximized?: boolean;
    orgChart?: OrgChartSpec;
    pieChart?: PieChartSpec;
    scorecardChart?: ScorecardChartSpec;
    sortSpecs?: SortSpec[];
    subtitle?: string;
    subtitleTextFormat?: TextFormat;
    subtitleTextPosition?: TextPosition;
    title?: string;
    titleTextFormat?: TextFormat;
    titleTextPosition?: TextPosition;
    treemapChart?: TreemapChartSpec;
    waterfallChart?: WaterfallChartSpec;
}
