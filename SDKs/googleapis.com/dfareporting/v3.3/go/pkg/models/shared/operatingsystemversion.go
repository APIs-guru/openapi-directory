package shared

// OperatingSystemVersion
// Contains information about a particular version of an operating system that can be targeted by ads.
type OperatingSystemVersion struct {
	ID              *string          `json:"id,omitempty"`
	Kind            *string          `json:"kind,omitempty"`
	MajorVersion    *string          `json:"majorVersion,omitempty"`
	MinorVersion    *string          `json:"minorVersion,omitempty"`
	Name            *string          `json:"name,omitempty"`
	OperatingSystem *OperatingSystem `json:"operatingSystem,omitempty"`
}
