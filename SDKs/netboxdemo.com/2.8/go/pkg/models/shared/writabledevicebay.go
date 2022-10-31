package shared

type WritableDeviceBay struct {
	Description     *string  `json:"description,omitempty"`
	Device          int64    `json:"device"`
	ID              *int64   `json:"id,omitempty"`
	InstalledDevice *int64   `json:"installed_device,omitempty"`
	Name            string   `json:"name"`
	Tags            []string `json:"tags,omitempty"`
}
