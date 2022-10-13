package shared

type GoogleCloudRetailV2Interval struct {
	ExclusiveMaximum *float64 `json:"exclusiveMaximum"`
	ExclusiveMinimum *float64 `json:"exclusiveMinimum"`
	Maximum          *float64 `json:"maximum"`
	Minimum          *float64 `json:"minimum"`
}
