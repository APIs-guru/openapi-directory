package shared

type WaterfallChartCustomSubtotal struct {
	DataIsSubtotal *bool   `json:"dataIsSubtotal"`
	Label          *string `json:"label"`
	SubtotalIndex  *int32  `json:"subtotalIndex"`
}
