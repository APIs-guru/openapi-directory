package shared

type ToggleRequest struct {
	ID       *int32 `json:"id,omitempty"`
	IsActive *bool  `json:"isActive,omitempty"`
}
