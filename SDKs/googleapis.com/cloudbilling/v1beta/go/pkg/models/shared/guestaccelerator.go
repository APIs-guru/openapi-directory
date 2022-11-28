package shared

// GuestAccelerator
// Specification of a set of guest accelerators attached to a machine.
type GuestAccelerator struct {
	AcceleratorCount *string `json:"acceleratorCount,omitempty"`
	AcceleratorType  *string `json:"acceleratorType,omitempty"`
}
