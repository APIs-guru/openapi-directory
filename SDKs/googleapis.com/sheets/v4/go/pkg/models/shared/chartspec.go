package shared

type ChartSpecHiddenDimensionStrategyEnum string

const (
	ChartSpecHiddenDimensionStrategyEnumChartHiddenDimensionStrategyUnspecified ChartSpecHiddenDimensionStrategyEnum = "CHART_HIDDEN_DIMENSION_STRATEGY_UNSPECIFIED"
	ChartSpecHiddenDimensionStrategyEnumSkipHiddenRowsAndColumns                ChartSpecHiddenDimensionStrategyEnum = "SKIP_HIDDEN_ROWS_AND_COLUMNS"
	ChartSpecHiddenDimensionStrategyEnumSkipHiddenRows                          ChartSpecHiddenDimensionStrategyEnum = "SKIP_HIDDEN_ROWS"
	ChartSpecHiddenDimensionStrategyEnumSkipHiddenColumns                       ChartSpecHiddenDimensionStrategyEnum = "SKIP_HIDDEN_COLUMNS"
	ChartSpecHiddenDimensionStrategyEnumShowAll                                 ChartSpecHiddenDimensionStrategyEnum = "SHOW_ALL"
)

type ChartSpec struct {
	AltText                   *string                               `json:"altText,omitempty"`
	BackgroundColor           *Color                                `json:"backgroundColor,omitempty"`
	BackgroundColorStyle      *ColorStyle                           `json:"backgroundColorStyle,omitempty"`
	BasicChart                *BasicChartSpec                       `json:"basicChart,omitempty"`
	BubbleChart               *BubbleChartSpec                      `json:"bubbleChart,omitempty"`
	CandlestickChart          *CandlestickChartSpec                 `json:"candlestickChart,omitempty"`
	DataSourceChartProperties *DataSourceChartProperties            `json:"dataSourceChartProperties,omitempty"`
	FilterSpecs               []FilterSpec                          `json:"filterSpecs,omitempty"`
	FontName                  *string                               `json:"fontName,omitempty"`
	HiddenDimensionStrategy   *ChartSpecHiddenDimensionStrategyEnum `json:"hiddenDimensionStrategy,omitempty"`
	HistogramChart            *HistogramChartSpec                   `json:"histogramChart,omitempty"`
	Maximized                 *bool                                 `json:"maximized,omitempty"`
	OrgChart                  *OrgChartSpec                         `json:"orgChart,omitempty"`
	PieChart                  *PieChartSpec                         `json:"pieChart,omitempty"`
	ScorecardChart            *ScorecardChartSpec                   `json:"scorecardChart,omitempty"`
	SortSpecs                 []SortSpec                            `json:"sortSpecs,omitempty"`
	Subtitle                  *string                               `json:"subtitle,omitempty"`
	SubtitleTextFormat        *TextFormat                           `json:"subtitleTextFormat,omitempty"`
	SubtitleTextPosition      *TextPosition                         `json:"subtitleTextPosition,omitempty"`
	Title                     *string                               `json:"title,omitempty"`
	TitleTextFormat           *TextFormat                           `json:"titleTextFormat,omitempty"`
	TitleTextPosition         *TextPosition                         `json:"titleTextPosition,omitempty"`
	TreemapChart              *TreemapChartSpec                     `json:"treemapChart,omitempty"`
	WaterfallChart            *WaterfallChartSpec                   `json:"waterfallChart,omitempty"`
}
