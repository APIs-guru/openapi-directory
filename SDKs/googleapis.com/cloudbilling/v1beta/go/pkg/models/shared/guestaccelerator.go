package shared

type GuestAccelerator struct {
	AcceleratorCount *string `json:"acceleratorCount,omitempty"`
	AcceleratorType  *string `json:"acceleratorType,omitempty"`
}
