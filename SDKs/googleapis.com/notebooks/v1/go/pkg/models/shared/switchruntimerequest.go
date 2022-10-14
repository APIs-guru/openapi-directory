package shared

type SwitchRuntimeRequest struct {
	AcceleratorConfig *RuntimeAcceleratorConfig `json:"acceleratorConfig,omitempty"`
	MachineType       *string                   `json:"machineType,omitempty"`
	RequestID         *string                   `json:"requestId,omitempty"`
}
