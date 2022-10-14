package shared

type BasicSeriesDataPointStyleOverride struct {
	Color      *Color      `json:"color,omitempty"`
	ColorStyle *ColorStyle `json:"colorStyle,omitempty"`
	Index      *int32      `json:"index,omitempty"`
	PointStyle *PointStyle `json:"pointStyle,omitempty"`
}
