package shared

type UpdateFormInfoRequest struct {
	Info       *Info   `json:"info,omitempty"`
	UpdateMask *string `json:"updateMask,omitempty"`
}
