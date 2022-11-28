package shared

// Tpu
// Details of the TPU resource(s) being requested.
type Tpu struct {
	NodeSpec []NodeSpec `json:"nodeSpec,omitempty"`
}

// TpuInput
// Details of the TPU resource(s) being requested.
type TpuInput struct {
	NodeSpec []NodeSpecInput `json:"nodeSpec,omitempty"`
}
