package shared

type YumSettings struct {
	Excludes          []string `json:"excludes,omitempty"`
	ExclusivePackages []string `json:"exclusivePackages,omitempty"`
	Minimal           *bool    `json:"minimal,omitempty"`
	Security          *bool    `json:"security,omitempty"`
}
