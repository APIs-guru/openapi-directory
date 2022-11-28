package shared

// DeviceFile
// A single device file description.
type DeviceFile struct {
	ObbFile     *ObbFile     `json:"obbFile,omitempty"`
	RegularFile *RegularFile `json:"regularFile,omitempty"`
}
