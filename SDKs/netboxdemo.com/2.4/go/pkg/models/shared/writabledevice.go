package shared

import (
	"time"
)

type WritableDevice struct {
	AssetTag         *string                `json:"asset_tag"`
	Cluster          *int64                 `json:"cluster"`
	Comments         *string                `json:"comments"`
	Created          *time.Time             `json:"created"`
	CustomFields     map[string]interface{} `json:"custom_fields"`
	DeviceRole       int64                  `json:"device_role"`
	DeviceType       int64                  `json:"device_type"`
	DisplayName      *string                `json:"display_name"`
	Face             *int64                 `json:"face"`
	ID               *int64                 `json:"id"`
	LastUpdated      *time.Time             `json:"last_updated"`
	LocalContextData *string                `json:"local_context_data"`
	Name             *string                `json:"name"`
	ParentDevice     *string                `json:"parent_device"`
	Platform         *int64                 `json:"platform"`
	Position         *int64                 `json:"position"`
	PrimaryIP        *string                `json:"primary_ip"`
	PrimaryIp4       *int64                 `json:"primary_ip4"`
	PrimaryIp6       *int64                 `json:"primary_ip6"`
	Rack             *int64                 `json:"rack"`
	Serial           *string                `json:"serial"`
	Site             int64                  `json:"site"`
	Status           *int64                 `json:"status"`
	Tags             []string               `json:"tags"`
	Tenant           *int64                 `json:"tenant"`
	VcPosition       *int64                 `json:"vc_position"`
	VcPriority       *int64                 `json:"vc_priority"`
	VirtualChassis   *int64                 `json:"virtual_chassis"`
}
