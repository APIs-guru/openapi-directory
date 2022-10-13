package shared

type IosDeviceFile struct {
	BundleID   *string        `json:"bundleId"`
	Content    *FileReference `json:"content"`
	DevicePath *string        `json:"devicePath"`
}
