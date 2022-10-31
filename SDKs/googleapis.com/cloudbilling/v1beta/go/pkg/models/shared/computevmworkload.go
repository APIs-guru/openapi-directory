package shared

type ComputeVMWorkload struct {
	EnableConfidentialCompute *bool             `json:"enableConfidentialCompute,omitempty"`
	GuestAccelerator          *GuestAccelerator `json:"guestAccelerator,omitempty"`
	InstancesRunning          *Usage            `json:"instancesRunning,omitempty"`
	Licenses                  []string          `json:"licenses,omitempty"`
	MachineType               *MachineType      `json:"machineType,omitempty"`
	PersistentDisks           []PersistentDisk  `json:"persistentDisks,omitempty"`
	Preemptible               *bool             `json:"preemptible,omitempty"`
	Region                    *string           `json:"region,omitempty"`
}
