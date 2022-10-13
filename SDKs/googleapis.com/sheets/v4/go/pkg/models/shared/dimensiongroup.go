package shared

type DimensionGroup struct {
	Collapsed *bool           `json:"collapsed"`
	Depth     *int32          `json:"depth"`
	Range     *DimensionRange `json:"range"`
}
