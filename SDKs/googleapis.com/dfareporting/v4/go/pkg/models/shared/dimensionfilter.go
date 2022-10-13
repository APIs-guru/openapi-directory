package shared

type DimensionFilter struct {
	DimensionName *string `json:"dimensionName"`
	Kind          *string `json:"kind"`
	Value         *string `json:"value"`
}
