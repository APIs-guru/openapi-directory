package shared

// ZypperSettings
// Zypper patching is performed by running `zypper patch`. See also https://en.opensuse.org/SDB:Zypper_manual.
type ZypperSettings struct {
	Categories       []string `json:"categories,omitempty"`
	Excludes         []string `json:"excludes,omitempty"`
	ExclusivePatches []string `json:"exclusivePatches,omitempty"`
	Severities       []string `json:"severities,omitempty"`
	WithOptional     *bool    `json:"withOptional,omitempty"`
	WithUpdate       *bool    `json:"withUpdate,omitempty"`
}
