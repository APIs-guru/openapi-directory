package shared

// ObbFile
// An opaque binary blob file to install on the device before the test starts.
type ObbFile struct {
	Obb         *FileReference `json:"obb,omitempty"`
	ObbFileName *string        `json:"obbFileName,omitempty"`
}
