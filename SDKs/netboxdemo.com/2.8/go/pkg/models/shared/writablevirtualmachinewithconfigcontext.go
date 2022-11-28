package shared

type WritableVirtualMachineWithConfigContextStatusEnum string

const (
	WritableVirtualMachineWithConfigContextStatusEnumOffline         WritableVirtualMachineWithConfigContextStatusEnum = "offline"
	WritableVirtualMachineWithConfigContextStatusEnumActive          WritableVirtualMachineWithConfigContextStatusEnum = "active"
	WritableVirtualMachineWithConfigContextStatusEnumPlanned         WritableVirtualMachineWithConfigContextStatusEnum = "planned"
	WritableVirtualMachineWithConfigContextStatusEnumStaged          WritableVirtualMachineWithConfigContextStatusEnum = "staged"
	WritableVirtualMachineWithConfigContextStatusEnumFailed          WritableVirtualMachineWithConfigContextStatusEnum = "failed"
	WritableVirtualMachineWithConfigContextStatusEnumDecommissioning WritableVirtualMachineWithConfigContextStatusEnum = "decommissioning"
)

type WritableVirtualMachineWithConfigContextInput struct {
	Cluster          int64                                              `json:"cluster"`
	Comments         *string                                            `json:"comments,omitempty"`
	CustomFields     map[string]interface{}                             `json:"custom_fields,omitempty"`
	Disk             *int64                                             `json:"disk,omitempty"`
	LocalContextData *string                                            `json:"local_context_data,omitempty"`
	Memory           *int64                                             `json:"memory,omitempty"`
	Name             string                                             `json:"name"`
	Platform         *int64                                             `json:"platform,omitempty"`
	PrimaryIp4       *int64                                             `json:"primary_ip4,omitempty"`
	PrimaryIp6       *int64                                             `json:"primary_ip6,omitempty"`
	Role             *int64                                             `json:"role,omitempty"`
	Status           *WritableVirtualMachineWithConfigContextStatusEnum `json:"status,omitempty"`
	Tags             []string                                           `json:"tags,omitempty"`
	Tenant           *int64                                             `json:"tenant,omitempty"`
	Vcpus            *int64                                             `json:"vcpus,omitempty"`
}
