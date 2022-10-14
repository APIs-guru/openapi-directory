package shared

type DimensionGroup struct {
	Collapsed *bool           `json:"collapsed,omitempty"`
	Depth     *int32          `json:"depth,omitempty"`
	Range     *DimensionRange `json:"range,omitempty"`
}
