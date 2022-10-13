package shared

import (
	"time"
)

type VirtualMachineWithConfigContextStatusLabelEnum string

const (
	VirtualMachineWithConfigContextStatusLabelEnumOffline         VirtualMachineWithConfigContextStatusLabelEnum = "Offline"
	VirtualMachineWithConfigContextStatusLabelEnumActive          VirtualMachineWithConfigContextStatusLabelEnum = "Active"
	VirtualMachineWithConfigContextStatusLabelEnumPlanned         VirtualMachineWithConfigContextStatusLabelEnum = "Planned"
	VirtualMachineWithConfigContextStatusLabelEnumStaged          VirtualMachineWithConfigContextStatusLabelEnum = "Staged"
	VirtualMachineWithConfigContextStatusLabelEnumFailed          VirtualMachineWithConfigContextStatusLabelEnum = "Failed"
	VirtualMachineWithConfigContextStatusLabelEnumDecommissioning VirtualMachineWithConfigContextStatusLabelEnum = "Decommissioning"
)

type VirtualMachineWithConfigContextStatusValueEnum string

const (
	VirtualMachineWithConfigContextStatusValueEnumOffline         VirtualMachineWithConfigContextStatusValueEnum = "offline"
	VirtualMachineWithConfigContextStatusValueEnumActive          VirtualMachineWithConfigContextStatusValueEnum = "active"
	VirtualMachineWithConfigContextStatusValueEnumPlanned         VirtualMachineWithConfigContextStatusValueEnum = "planned"
	VirtualMachineWithConfigContextStatusValueEnumStaged          VirtualMachineWithConfigContextStatusValueEnum = "staged"
	VirtualMachineWithConfigContextStatusValueEnumFailed          VirtualMachineWithConfigContextStatusValueEnum = "failed"
	VirtualMachineWithConfigContextStatusValueEnumDecommissioning VirtualMachineWithConfigContextStatusValueEnum = "decommissioning"
)

type VirtualMachineWithConfigContextStatusStatus struct {
	Label VirtualMachineWithConfigContextStatusLabelEnum `json:"label"`
	Value VirtualMachineWithConfigContextStatusValueEnum `json:"value"`
}

type VirtualMachineWithConfigContext struct {
	Cluster          NestedCluster                                `json:"cluster"`
	Comments         *string                                      `json:"comments"`
	ConfigContext    map[string]string                            `json:"config_context"`
	Created          *time.Time                                   `json:"created"`
	CustomFields     map[string]interface{}                       `json:"custom_fields"`
	Disk             *int64                                       `json:"disk"`
	ID               *int64                                       `json:"id"`
	LastUpdated      *time.Time                                   `json:"last_updated"`
	LocalContextData *string                                      `json:"local_context_data"`
	Memory           *int64                                       `json:"memory"`
	Name             string                                       `json:"name"`
	Platform         *NestedPlatform                              `json:"platform"`
	PrimaryIP        *NestedIPAddress                             `json:"primary_ip"`
	PrimaryIp4       *NestedIPAddress                             `json:"primary_ip4"`
	PrimaryIp6       *NestedIPAddress                             `json:"primary_ip6"`
	Role             *NestedDeviceRole                            `json:"role"`
	Site             *NestedSite                                  `json:"site"`
	Status           *VirtualMachineWithConfigContextStatusStatus `json:"status"`
	Tags             []string                                     `json:"tags"`
	Tenant           *NestedTenant                                `json:"tenant"`
	Vcpus            *int64                                       `json:"vcpus"`
}
