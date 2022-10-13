package shared

type TreemapChartColorScale struct {
	MaxValueColor      *Color      `json:"maxValueColor"`
	MaxValueColorStyle *ColorStyle `json:"maxValueColorStyle"`
	MidValueColor      *Color      `json:"midValueColor"`
	MidValueColorStyle *ColorStyle `json:"midValueColorStyle"`
	MinValueColor      *Color      `json:"minValueColor"`
	MinValueColorStyle *ColorStyle `json:"minValueColorStyle"`
	NoDataColor        *Color      `json:"noDataColor"`
	NoDataColorStyle   *ColorStyle `json:"noDataColorStyle"`
}
