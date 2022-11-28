package shared

type WritableDeviceWithConfigContextRackFaceEnum string

const (
	WritableDeviceWithConfigContextRackFaceEnumFront WritableDeviceWithConfigContextRackFaceEnum = "front"
	WritableDeviceWithConfigContextRackFaceEnumRear  WritableDeviceWithConfigContextRackFaceEnum = "rear"
)

type WritableDeviceWithConfigContextStatusEnum string

const (
	WritableDeviceWithConfigContextStatusEnumOffline         WritableDeviceWithConfigContextStatusEnum = "offline"
	WritableDeviceWithConfigContextStatusEnumActive          WritableDeviceWithConfigContextStatusEnum = "active"
	WritableDeviceWithConfigContextStatusEnumPlanned         WritableDeviceWithConfigContextStatusEnum = "planned"
	WritableDeviceWithConfigContextStatusEnumStaged          WritableDeviceWithConfigContextStatusEnum = "staged"
	WritableDeviceWithConfigContextStatusEnumFailed          WritableDeviceWithConfigContextStatusEnum = "failed"
	WritableDeviceWithConfigContextStatusEnumInventory       WritableDeviceWithConfigContextStatusEnum = "inventory"
	WritableDeviceWithConfigContextStatusEnumDecommissioning WritableDeviceWithConfigContextStatusEnum = "decommissioning"
)

type WritableDeviceWithConfigContextInput struct {
	AssetTag         *string                                      `json:"asset_tag,omitempty"`
	Cluster          *int64                                       `json:"cluster,omitempty"`
	Comments         *string                                      `json:"comments,omitempty"`
	CustomFields     map[string]interface{}                       `json:"custom_fields,omitempty"`
	DeviceRole       int64                                        `json:"device_role"`
	DeviceType       int64                                        `json:"device_type"`
	Face             *WritableDeviceWithConfigContextRackFaceEnum `json:"face,omitempty"`
	LocalContextData *string                                      `json:"local_context_data,omitempty"`
	Name             *string                                      `json:"name,omitempty"`
	ParentDevice     *NestedDeviceInput                           `json:"parent_device,omitempty"`
	Platform         *int64                                       `json:"platform,omitempty"`
	Position         *int64                                       `json:"position,omitempty"`
	PrimaryIp4       *int64                                       `json:"primary_ip4,omitempty"`
	PrimaryIp6       *int64                                       `json:"primary_ip6,omitempty"`
	Rack             *int64                                       `json:"rack,omitempty"`
	Serial           *string                                      `json:"serial,omitempty"`
	Site             int64                                        `json:"site"`
	Status           *WritableDeviceWithConfigContextStatusEnum   `json:"status,omitempty"`
	Tags             []string                                     `json:"tags,omitempty"`
	Tenant           *int64                                       `json:"tenant,omitempty"`
	VcPosition       *int64                                       `json:"vc_position,omitempty"`
	VcPriority       *int64                                       `json:"vc_priority,omitempty"`
	VirtualChassis   *int64                                       `json:"virtual_chassis,omitempty"`
}
