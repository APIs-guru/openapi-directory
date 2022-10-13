package shared

type ZypperSettings struct {
	Categories       []string `json:"categories"`
	Excludes         []string `json:"excludes"`
	ExclusivePatches []string `json:"exclusivePatches"`
	Severities       []string `json:"severities"`
	WithOptional     *bool    `json:"withOptional"`
	WithUpdate       *bool    `json:"withUpdate"`
}
