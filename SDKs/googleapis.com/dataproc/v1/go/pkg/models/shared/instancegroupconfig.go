package shared

type InstanceGroupConfigPreemptibilityEnum string

const (
	InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified InstanceGroupConfigPreemptibilityEnum = "PREEMPTIBILITY_UNSPECIFIED"
	InstanceGroupConfigPreemptibilityEnumNonPreemptible            InstanceGroupConfigPreemptibilityEnum = "NON_PREEMPTIBLE"
	InstanceGroupConfigPreemptibilityEnumPreemptible               InstanceGroupConfigPreemptibilityEnum = "PREEMPTIBLE"
	InstanceGroupConfigPreemptibilityEnumSpot                      InstanceGroupConfigPreemptibilityEnum = "SPOT"
)

// InstanceGroupConfigInput
// The config settings for Compute Engine resources in an instance group, such as a master or worker group.
type InstanceGroupConfigInput struct {
	Accelerators   []AcceleratorConfig                    `json:"accelerators,omitempty"`
	DiskConfig     *DiskConfig                            `json:"diskConfig,omitempty"`
	ImageURI       *string                                `json:"imageUri,omitempty"`
	MachineTypeURI *string                                `json:"machineTypeUri,omitempty"`
	MinCPUPlatform *string                                `json:"minCpuPlatform,omitempty"`
	NumInstances   *int32                                 `json:"numInstances,omitempty"`
	Preemptibility *InstanceGroupConfigPreemptibilityEnum `json:"preemptibility,omitempty"`
}

// InstanceGroupConfig
// The config settings for Compute Engine resources in an instance group, such as a master or worker group.
type InstanceGroupConfig struct {
	Accelerators       []AcceleratorConfig                    `json:"accelerators,omitempty"`
	DiskConfig         *DiskConfig                            `json:"diskConfig,omitempty"`
	ImageURI           *string                                `json:"imageUri,omitempty"`
	InstanceNames      []string                               `json:"instanceNames,omitempty"`
	InstanceReferences []InstanceReference                    `json:"instanceReferences,omitempty"`
	IsPreemptible      *bool                                  `json:"isPreemptible,omitempty"`
	MachineTypeURI     *string                                `json:"machineTypeUri,omitempty"`
	ManagedGroupConfig *ManagedGroupConfig                    `json:"managedGroupConfig,omitempty"`
	MinCPUPlatform     *string                                `json:"minCpuPlatform,omitempty"`
	NumInstances       *int32                                 `json:"numInstances,omitempty"`
	Preemptibility     *InstanceGroupConfigPreemptibilityEnum `json:"preemptibility,omitempty"`
}
