package shared

type UpdateParametersRequest struct {
	Parameters *MemcacheParameters `json:"parameters"`
	UpdateMask *string             `json:"updateMask"`
}
