package shared

type ZypperPatch struct {
	Category  *string `json:"category,omitempty"`
	PatchName *string `json:"patchName,omitempty"`
	Severity  *string `json:"severity,omitempty"`
	Summary   *string `json:"summary,omitempty"`
}
