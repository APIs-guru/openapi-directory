package shared

type YumSettings struct {
	Excludes          []string `json:"excludes"`
	ExclusivePackages []string `json:"exclusivePackages"`
	Minimal           *bool    `json:"minimal"`
	Security          *bool    `json:"security"`
}
