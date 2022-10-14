package shared

type DeviceBay struct {
	Description     *string       `json:"description,omitempty"`
	Device          NestedDevice  `json:"device"`
	ID              *int64        `json:"id,omitempty"`
	InstalledDevice *NestedDevice `json:"installed_device,omitempty"`
	Name            string        `json:"name"`
	Tags            []string      `json:"tags,omitempty"`
}
