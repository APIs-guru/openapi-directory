package shared

// MachineType
// Specification of machine series, memory, and number of vCPUs.
type MachineType struct {
	CustomMachineType     *CustomMachineType     `json:"customMachineType,omitempty"`
	PredefinedMachineType *PredefinedMachineType `json:"predefinedMachineType,omitempty"`
}
