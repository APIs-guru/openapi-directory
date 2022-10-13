package shared

type UpdateReleaseRequest struct {
	Release    *Release `json:"release"`
	UpdateMask *string  `json:"updateMask"`
}
