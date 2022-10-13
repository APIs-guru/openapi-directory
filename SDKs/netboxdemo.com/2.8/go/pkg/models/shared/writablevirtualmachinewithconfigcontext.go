package shared

import (
	"time"
)

type WritableVirtualMachineWithConfigContextStatusStatusEnum string

const (
	WritableVirtualMachineWithConfigContextStatusStatusEnumOffline         WritableVirtualMachineWithConfigContextStatusStatusEnum = "offline"
	WritableVirtualMachineWithConfigContextStatusStatusEnumActive          WritableVirtualMachineWithConfigContextStatusStatusEnum = "active"
	WritableVirtualMachineWithConfigContextStatusStatusEnumPlanned         WritableVirtualMachineWithConfigContextStatusStatusEnum = "planned"
	WritableVirtualMachineWithConfigContextStatusStatusEnumStaged          WritableVirtualMachineWithConfigContextStatusStatusEnum = "staged"
	WritableVirtualMachineWithConfigContextStatusStatusEnumFailed          WritableVirtualMachineWithConfigContextStatusStatusEnum = "failed"
	WritableVirtualMachineWithConfigContextStatusStatusEnumDecommissioning WritableVirtualMachineWithConfigContextStatusStatusEnum = "decommissioning"
)

type WritableVirtualMachineWithConfigContext struct {
	Cluster          int64                                                    `json:"cluster"`
	Comments         *string                                                  `json:"comments"`
	ConfigContext    map[string]string                                        `json:"config_context"`
	Created          *time.Time                                               `json:"created"`
	CustomFields     map[string]interface{}                                   `json:"custom_fields"`
	Disk             *int64                                                   `json:"disk"`
	ID               *int64                                                   `json:"id"`
	LastUpdated      *time.Time                                               `json:"last_updated"`
	LocalContextData *string                                                  `json:"local_context_data"`
	Memory           *int64                                                   `json:"memory"`
	Name             string                                                   `json:"name"`
	Platform         *int64                                                   `json:"platform"`
	PrimaryIP        *string                                                  `json:"primary_ip"`
	PrimaryIp4       *int64                                                   `json:"primary_ip4"`
	PrimaryIp6       *int64                                                   `json:"primary_ip6"`
	Role             *int64                                                   `json:"role"`
	Site             *string                                                  `json:"site"`
	Status           *WritableVirtualMachineWithConfigContextStatusStatusEnum `json:"status"`
	Tags             []string                                                 `json:"tags"`
	Tenant           *int64                                                   `json:"tenant"`
	Vcpus            *int64                                                   `json:"vcpus"`
}
