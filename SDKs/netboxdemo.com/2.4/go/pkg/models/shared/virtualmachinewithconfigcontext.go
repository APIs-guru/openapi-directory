package shared

import (
	"time"
)

type VirtualMachineWithConfigContextStatusStatus struct {
	Label string `json:"label"`
	Value int64  `json:"value"`
}

type VirtualMachineWithConfigContext struct {
	Cluster          NestedCluster                                `json:"cluster"`
	Comments         *string                                      `json:"comments"`
	ConfigContext    *string                                      `json:"config_context"`
	Created          *time.Time                                   `json:"created"`
	CustomFields     map[string]interface{}                       `json:"custom_fields"`
	Disk             *int64                                       `json:"disk"`
	ID               *int64                                       `json:"id"`
	LastUpdated      *time.Time                                   `json:"last_updated"`
	LocalContextData *string                                      `json:"local_context_data"`
	Memory           *int64                                       `json:"memory"`
	Name             string                                       `json:"name"`
	Platform         *NestedPlatform                              `json:"platform"`
	PrimaryIP        *VirtualMachineIPAddress                     `json:"primary_ip"`
	PrimaryIp4       *VirtualMachineIPAddress                     `json:"primary_ip4"`
	PrimaryIp6       *VirtualMachineIPAddress                     `json:"primary_ip6"`
	Role             *NestedDeviceRole                            `json:"role"`
	Status           *VirtualMachineWithConfigContextStatusStatus `json:"status"`
	Tags             []string                                     `json:"tags"`
	Tenant           *NestedTenant                                `json:"tenant"`
	Vcpus            *int64                                       `json:"vcpus"`
}
