package shared

type BasicSeriesDataPointStyleOverride struct {
	Color      *Color      `json:"color"`
	ColorStyle *ColorStyle `json:"colorStyle"`
	Index      *int32      `json:"index"`
	PointStyle *PointStyle `json:"pointStyle"`
}
