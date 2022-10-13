package shared

type UpdateFormInfoRequest struct {
	Info       *Info   `json:"info"`
	UpdateMask *string `json:"updateMask"`
}
