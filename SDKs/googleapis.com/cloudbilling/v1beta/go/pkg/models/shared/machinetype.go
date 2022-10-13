package shared

type MachineType struct {
	CustomMachineType     *CustomMachineType     `json:"customMachineType"`
	PredefinedMachineType *PredefinedMachineType `json:"predefinedMachineType"`
}
