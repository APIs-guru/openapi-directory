package shared

// YumSettings
// Yum patching is performed by executing `yum update`. Additional options can be set to control how this is executed. Note that not all settings are supported on all platforms.
type YumSettings struct {
	Excludes          []string `json:"excludes,omitempty"`
	ExclusivePackages []string `json:"exclusivePackages,omitempty"`
	Minimal           *bool    `json:"minimal,omitempty"`
	Security          *bool    `json:"security,omitempty"`
}
