package shared

type IosDeviceFile struct {
	BundleID   *string        `json:"bundleId,omitempty"`
	Content    *FileReference `json:"content,omitempty"`
	DevicePath *string        `json:"devicePath,omitempty"`
}
