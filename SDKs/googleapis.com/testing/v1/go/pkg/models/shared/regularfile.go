package shared

// RegularFile
// A file or directory to install on the device before the test starts.
type RegularFile struct {
	Content    *FileReference `json:"content,omitempty"`
	DevicePath *string        `json:"devicePath,omitempty"`
}
