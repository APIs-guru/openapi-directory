package shared

// InventoryZypperPatch
// Details related to a Zypper Patch.
type InventoryZypperPatch struct {
	Category  *string `json:"category,omitempty"`
	PatchName *string `json:"patchName,omitempty"`
	Severity  *string `json:"severity,omitempty"`
	Summary   *string `json:"summary,omitempty"`
}
