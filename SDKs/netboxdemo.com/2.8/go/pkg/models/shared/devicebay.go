package shared

type DeviceBay struct {
	Description     *string       `json:"description"`
	Device          NestedDevice  `json:"device"`
	ID              *int64        `json:"id"`
	InstalledDevice *NestedDevice `json:"installed_device"`
	Name            string        `json:"name"`
	Tags            []string      `json:"tags"`
}
