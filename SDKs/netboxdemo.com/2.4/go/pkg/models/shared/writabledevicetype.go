package shared

import (
	"time"
)

type WritableDeviceType struct {
	Comments          *string                `json:"comments"`
	Created           *time.Time             `json:"created"`
	CustomFields      map[string]interface{} `json:"custom_fields"`
	ID                *int64                 `json:"id"`
	InstanceCount     *int64                 `json:"instance_count"`
	InterfaceOrdering *int64                 `json:"interface_ordering"`
	IsConsoleServer   *bool                  `json:"is_console_server"`
	IsFullDepth       *bool                  `json:"is_full_depth"`
	IsNetworkDevice   *bool                  `json:"is_network_device"`
	IsPdu             *bool                  `json:"is_pdu"`
	LastUpdated       *time.Time             `json:"last_updated"`
	Manufacturer      int64                  `json:"manufacturer"`
	Model             string                 `json:"model"`
	PartNumber        *string                `json:"part_number"`
	Slug              string                 `json:"slug"`
	SubdeviceRole     *bool                  `json:"subdevice_role"`
	Tags              []string               `json:"tags"`
	UHeight           *int64                 `json:"u_height"`
}
