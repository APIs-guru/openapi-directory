package shared

// SoftwareVersionOut
// The software version.
type SoftwareVersionOut struct {
	SoftwareNameAndVersion *string `json:"softwareNameAndVersion,omitempty"`
	SoftwareVersion        []int32 `json:"softwareVersion,omitempty"`
}
