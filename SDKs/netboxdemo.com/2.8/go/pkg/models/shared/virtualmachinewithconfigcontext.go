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

type VirtualMachineWithConfigContextStatus struct {
	Label VirtualMachineWithConfigContextStatusLabelEnum `json:"label"`
	Value VirtualMachineWithConfigContextStatusValueEnum `json:"value"`
}

type VirtualMachineWithConfigContext struct {
	Cluster          NestedCluster                          `json:"cluster"`
	Comments         *string                                `json:"comments,omitempty"`
	ConfigContext    map[string]string                      `json:"config_context,omitempty"`
	Created          *time.Time                             `json:"created,omitempty"`
	CustomFields     map[string]interface{}                 `json:"custom_fields,omitempty"`
	Disk             *int64                                 `json:"disk,omitempty"`
	ID               *int64                                 `json:"id,omitempty"`
	LastUpdated      *time.Time                             `json:"last_updated,omitempty"`
	LocalContextData *string                                `json:"local_context_data,omitempty"`
	Memory           *int64                                 `json:"memory,omitempty"`
	Name             string                                 `json:"name"`
	Platform         *NestedPlatform                        `json:"platform,omitempty"`
	PrimaryIP        *NestedIPAddress                       `json:"primary_ip,omitempty"`
	PrimaryIp4       *NestedIPAddress                       `json:"primary_ip4,omitempty"`
	PrimaryIp6       *NestedIPAddress                       `json:"primary_ip6,omitempty"`
	Role             *NestedDeviceRole                      `json:"role,omitempty"`
	Site             *NestedSite                            `json:"site,omitempty"`
	Status           *VirtualMachineWithConfigContextStatus `json:"status,omitempty"`
	Tags             []string                               `json:"tags,omitempty"`
	Tenant           *NestedTenant                          `json:"tenant,omitempty"`
	Vcpus            *int64                                 `json:"vcpus,omitempty"`
}
