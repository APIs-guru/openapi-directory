package shared

type DeviceBay struct {
	Device          NestedDevice  `json:"device"`
	ID              *int64        `json:"id"`
	InstalledDevice *NestedDevice `json:"installed_device"`
	Name            string        `json:"name"`
	Tags            []string      `json:"tags"`
}
