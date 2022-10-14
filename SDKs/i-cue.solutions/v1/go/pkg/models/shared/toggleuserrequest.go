package shared

type ToggleUserRequest struct {
	EntityID *int32 `json:"entityId,omitempty"`
	ID       *int32 `json:"id,omitempty"`
	IsActive *bool  `json:"isActive,omitempty"`
}
