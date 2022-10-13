package shared

type VirtualMachine struct {
	Accelerators                []Accelerator     `json:"accelerators"`
	BootDiskSizeGb              *int32            `json:"bootDiskSizeGb"`
	BootImage                   *string           `json:"bootImage"`
	CPUPlatform                 *string           `json:"cpuPlatform"`
	Disks                       []Disk            `json:"disks"`
	DockerCacheImages           []string          `json:"dockerCacheImages"`
	EnableStackdriverMonitoring *bool             `json:"enableStackdriverMonitoring"`
	Labels                      map[string]string `json:"labels"`
	MachineType                 *string           `json:"machineType"`
	Network                     *Network          `json:"network"`
	NvidiaDriverVersion         *string           `json:"nvidiaDriverVersion"`
	Preemptible                 *bool             `json:"preemptible"`
	Reservation                 *string           `json:"reservation"`
	ServiceAccount              *ServiceAccount   `json:"serviceAccount"`
	Volumes                     []Volume          `json:"volumes"`
}
