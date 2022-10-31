package shared

type ZypperSettings struct {
	Categories       []string `json:"categories,omitempty"`
	Excludes         []string `json:"excludes,omitempty"`
	ExclusivePatches []string `json:"exclusivePatches,omitempty"`
	Severities       []string `json:"severities,omitempty"`
	WithOptional     *bool    `json:"withOptional,omitempty"`
	WithUpdate       *bool    `json:"withUpdate,omitempty"`
}
