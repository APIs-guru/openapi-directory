package shared

type TreemapChartColorScale struct {
	MaxValueColor      *Color      `json:"maxValueColor,omitempty"`
	MaxValueColorStyle *ColorStyle `json:"maxValueColorStyle,omitempty"`
	MidValueColor      *Color      `json:"midValueColor,omitempty"`
	MidValueColorStyle *ColorStyle `json:"midValueColorStyle,omitempty"`
	MinValueColor      *Color      `json:"minValueColor,omitempty"`
	MinValueColorStyle *ColorStyle `json:"minValueColorStyle,omitempty"`
	NoDataColor        *Color      `json:"noDataColor,omitempty"`
	NoDataColorStyle   *ColorStyle `json:"noDataColorStyle,omitempty"`
}
