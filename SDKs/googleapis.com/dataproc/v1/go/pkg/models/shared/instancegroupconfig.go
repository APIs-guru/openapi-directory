package shared

type InstanceGroupConfigPreemptibilityEnum string

const (
	InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified InstanceGroupConfigPreemptibilityEnum = "PREEMPTIBILITY_UNSPECIFIED"
	InstanceGroupConfigPreemptibilityEnumNonPreemptible            InstanceGroupConfigPreemptibilityEnum = "NON_PREEMPTIBLE"
	InstanceGroupConfigPreemptibilityEnumPreemptible               InstanceGroupConfigPreemptibilityEnum = "PREEMPTIBLE"
	InstanceGroupConfigPreemptibilityEnumSpot                      InstanceGroupConfigPreemptibilityEnum = "SPOT"
)

type InstanceGroupConfig struct {
	Accelerators       []AcceleratorConfig                    `json:"accelerators"`
	DiskConfig         *DiskConfig                            `json:"diskConfig"`
	ImageURI           *string                                `json:"imageUri"`
	InstanceNames      []string                               `json:"instanceNames"`
	InstanceReferences []InstanceReference                    `json:"instanceReferences"`
	IsPreemptible      *bool                                  `json:"isPreemptible"`
	MachineTypeURI     *string                                `json:"machineTypeUri"`
	ManagedGroupConfig *ManagedGroupConfig                    `json:"managedGroupConfig"`
	MinCPUPlatform     *string                                `json:"minCpuPlatform"`
	NumInstances       *int32                                 `json:"numInstances"`
	Preemptibility     *InstanceGroupConfigPreemptibilityEnum `json:"preemptibility"`
}
