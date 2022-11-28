package shared

// ZypperPatch
// Details related to a Zypper Patch.
type ZypperPatch struct {
	Category  *string `json:"category,omitempty"`
	PatchName *string `json:"patchName,omitempty"`
	Severity  *string `json:"severity,omitempty"`
	Summary   *string `json:"summary,omitempty"`
}
