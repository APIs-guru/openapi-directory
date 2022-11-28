package shared

// IosDeviceFile
// A file or directory to install on the device before the test starts.
type IosDeviceFile struct {
	BundleID   *string        `json:"bundleId,omitempty"`
	Content    *FileReference `json:"content,omitempty"`
	DevicePath *string        `json:"devicePath,omitempty"`
}
