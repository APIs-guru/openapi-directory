package shared

type WritableDeviceBay struct {
	Device          int64    `json:"device"`
	ID              *int64   `json:"id"`
	InstalledDevice *int64   `json:"installed_device"`
	Name            string   `json:"name"`
	Tags            []string `json:"tags"`
}
