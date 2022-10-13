package shared

type InventoryZypperPatch struct {
	Category  *string `json:"category"`
	PatchName *string `json:"patchName"`
	Severity  *string `json:"severity"`
	Summary   *string `json:"summary"`
}
