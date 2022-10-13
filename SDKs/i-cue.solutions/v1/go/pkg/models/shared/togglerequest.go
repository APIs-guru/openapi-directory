package shared

type ToggleRequest struct {
	ID       *int32 `json:"id"`
	IsActive *bool  `json:"isActive"`
}
