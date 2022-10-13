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
	AltText                   *string                               `json:"altText"`
	BackgroundColor           *Color                                `json:"backgroundColor"`
	BackgroundColorStyle      *ColorStyle                           `json:"backgroundColorStyle"`
	BasicChart                *BasicChartSpec                       `json:"basicChart"`
	BubbleChart               *BubbleChartSpec                      `json:"bubbleChart"`
	CandlestickChart          *CandlestickChartSpec                 `json:"candlestickChart"`
	DataSourceChartProperties *DataSourceChartProperties            `json:"dataSourceChartProperties"`
	FilterSpecs               []FilterSpec                          `json:"filterSpecs"`
	FontName                  *string                               `json:"fontName"`
	HiddenDimensionStrategy   *ChartSpecHiddenDimensionStrategyEnum `json:"hiddenDimensionStrategy"`
	HistogramChart            *HistogramChartSpec                   `json:"histogramChart"`
	Maximized                 *bool                                 `json:"maximized"`
	OrgChart                  *OrgChartSpec                         `json:"orgChart"`
	PieChart                  *PieChartSpec                         `json:"pieChart"`
	ScorecardChart            *ScorecardChartSpec                   `json:"scorecardChart"`
	SortSpecs                 []SortSpec                            `json:"sortSpecs"`
	Subtitle                  *string                               `json:"subtitle"`
	SubtitleTextFormat        *TextFormat                           `json:"subtitleTextFormat"`
	SubtitleTextPosition      *TextPosition                         `json:"subtitleTextPosition"`
	Title                     *string                               `json:"title"`
	TitleTextFormat           *TextFormat                           `json:"titleTextFormat"`
	TitleTextPosition         *TextPosition                         `json:"titleTextPosition"`
	TreemapChart              *TreemapChartSpec                     `json:"treemapChart"`
	WaterfallChart            *WaterfallChartSpec                   `json:"waterfallChart"`
}
