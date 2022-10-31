package shared

type MachineType struct {
	CustomMachineType     *CustomMachineType     `json:"customMachineType,omitempty"`
	PredefinedMachineType *PredefinedMachineType `json:"predefinedMachineType,omitempty"`
}
