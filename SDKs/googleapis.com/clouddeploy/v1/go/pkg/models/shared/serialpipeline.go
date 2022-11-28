package shared

// SerialPipeline
// SerialPipeline defines a sequential set of stages for a `DeliveryPipeline`.
type SerialPipeline struct {
	Stages []Stage `json:"stages,omitempty"`
}
