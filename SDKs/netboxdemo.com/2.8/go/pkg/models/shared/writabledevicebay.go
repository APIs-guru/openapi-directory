package shared

type WritableDeviceBayInput struct {
	Description     *string  `json:"description,omitempty"`
	Device          int64    `json:"device"`
	InstalledDevice *int64   `json:"installed_device,omitempty"`
	Name            string   `json:"name"`
	Tags            []string `json:"tags,omitempty"`
}
