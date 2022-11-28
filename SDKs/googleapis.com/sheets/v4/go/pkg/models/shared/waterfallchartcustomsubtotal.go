package shared

// WaterfallChartCustomSubtotal
// A custom subtotal column for a waterfall chart series.
type WaterfallChartCustomSubtotal struct {
	DataIsSubtotal *bool   `json:"dataIsSubtotal,omitempty"`
	Label          *string `json:"label,omitempty"`
	SubtotalIndex  *int32  `json:"subtotalIndex,omitempty"`
}
