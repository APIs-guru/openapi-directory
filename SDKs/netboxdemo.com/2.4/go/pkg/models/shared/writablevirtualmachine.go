package shared

import (
	"time"
)

type WritableVirtualMachine struct {
	Cluster          int64                  `json:"cluster"`
	Comments         *string                `json:"comments,omitempty"`
	Created          *time.Time             `json:"created,omitempty"`
	CustomFields     map[string]interface{} `json:"custom_fields,omitempty"`
	Disk             *int64                 `json:"disk,omitempty"`
	ID               *int64                 `json:"id,omitempty"`
	LastUpdated      *time.Time             `json:"last_updated,omitempty"`
	LocalContextData *string                `json:"local_context_data,omitempty"`
	Memory           *int64                 `json:"memory,omitempty"`
	Name             string                 `json:"name"`
	Platform         *int64                 `json:"platform,omitempty"`
	PrimaryIP        *string                `json:"primary_ip,omitempty"`
	PrimaryIp4       *int64                 `json:"primary_ip4,omitempty"`
	PrimaryIp6       *int64                 `json:"primary_ip6,omitempty"`
	Role             *int64                 `json:"role,omitempty"`
	Site             *string                `json:"site,omitempty"`
	Status           *int64                 `json:"status,omitempty"`
	Tags             []string               `json:"tags,omitempty"`
	Tenant           *int64                 `json:"tenant,omitempty"`
	Vcpus            *int64                 `json:"vcpus,omitempty"`
}
