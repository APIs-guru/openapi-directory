package shared

type SwitchRuntimeRequest struct {
	AcceleratorConfig *RuntimeAcceleratorConfig `json:"acceleratorConfig"`
	MachineType       *string                   `json:"machineType"`
	RequestID         *string                   `json:"requestId"`
}
