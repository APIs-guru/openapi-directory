package shared

// VirtualMachine
// Carries information about a Compute Engine VM resource.
type VirtualMachine struct {
	Accelerators                []Accelerator     `json:"accelerators,omitempty"`
	BootDiskSizeGb              *int32            `json:"bootDiskSizeGb,omitempty"`
	BootImage                   *string           `json:"bootImage,omitempty"`
	CPUPlatform                 *string           `json:"cpuPlatform,omitempty"`
	Disks                       []Disk            `json:"disks,omitempty"`
	DockerCacheImages           []string          `json:"dockerCacheImages,omitempty"`
	EnableStackdriverMonitoring *bool             `json:"enableStackdriverMonitoring,omitempty"`
	Labels                      map[string]string `json:"labels,omitempty"`
	MachineType                 *string           `json:"machineType,omitempty"`
	Network                     *Network          `json:"network,omitempty"`
	NvidiaDriverVersion         *string           `json:"nvidiaDriverVersion,omitempty"`
	Preemptible                 *bool             `json:"preemptible,omitempty"`
	Reservation                 *string           `json:"reservation,omitempty"`
	ServiceAccount              *ServiceAccount   `json:"serviceAccount,omitempty"`
	Volumes                     []Volume          `json:"volumes,omitempty"`
}
