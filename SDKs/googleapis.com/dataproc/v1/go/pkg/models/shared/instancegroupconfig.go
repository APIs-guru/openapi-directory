package shared




type InstanceGroupConfigPreemptibilityEnum string

const (
    InstanceGroupConfigPreemptibilityEnumPreemptibilityUnspecified InstanceGroupConfigPreemptibilityEnum = "PREEMPTIBILITY_UNSPECIFIED"
InstanceGroupConfigPreemptibilityEnumNonPreemptible InstanceGroupConfigPreemptibilityEnum = "NON_PREEMPTIBLE"
InstanceGroupConfigPreemptibilityEnumPreemptible InstanceGroupConfigPreemptibilityEnum = "PREEMPTIBLE"
InstanceGroupConfigPreemptibilityEnumSpot InstanceGroupConfigPreemptibilityEnum = "SPOT"
)


type InstanceGroupConfig struct {
    Accelerators []AcceleratorConfig `json:"accelerators,omitempty"`
    DiskConfig *DiskConfig `json:"diskConfig,omitempty"`
    ImageURI *string `json:"imageUri,omitempty"`
    InstanceNames []string `json:"instanceNames,omitempty"`
    InstanceReferences []InstanceReference `json:"instanceReferences,omitempty"`
    IsPreemptible *bool `json:"isPreemptible,omitempty"`
    MachineTypeURI *string `json:"machineTypeUri,omitempty"`
    ManagedGroupConfig *ManagedGroupConfig `json:"managedGroupConfig,omitempty"`
    MinCPUPlatform *string `json:"minCpuPlatform,omitempty"`
    NumInstances *int32 `json:"numInstances,omitempty"`
    Preemptibility *InstanceGroupConfigPreemptibilityEnum `json:"preemptibility,omitempty"`
    
}

