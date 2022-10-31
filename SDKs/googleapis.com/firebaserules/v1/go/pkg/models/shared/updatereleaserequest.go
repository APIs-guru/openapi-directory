package shared

type UpdateReleaseRequest struct {
	Release    *Release `json:"release,omitempty"`
	UpdateMask *string  `json:"updateMask,omitempty"`
}
