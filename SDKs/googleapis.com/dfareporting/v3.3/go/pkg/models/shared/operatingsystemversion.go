package shared

type OperatingSystemVersion struct {
	ID              *string          `json:"id"`
	Kind            *string          `json:"kind"`
	MajorVersion    *string          `json:"majorVersion"`
	MinorVersion    *string          `json:"minorVersion"`
	Name            *string          `json:"name"`
	OperatingSystem *OperatingSystem `json:"operatingSystem"`
}
