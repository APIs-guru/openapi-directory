package shared

type ComputeVMWorkload struct {
	EnableConfidentialCompute *bool             `json:"enableConfidentialCompute"`
	GuestAccelerator          *GuestAccelerator `json:"guestAccelerator"`
	InstancesRunning          *Usage            `json:"instancesRunning"`
	Licenses                  []string          `json:"licenses"`
	MachineType               *MachineType      `json:"machineType"`
	PersistentDisks           []PersistentDisk  `json:"persistentDisks"`
	Preemptible               *bool             `json:"preemptible"`
	Region                    *string           `json:"region"`
}
