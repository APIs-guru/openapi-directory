package shared

type ToggleUserRequest struct {
	EntityID *int32 `json:"entityId"`
	ID       *int32 `json:"id"`
	IsActive *bool  `json:"isActive"`
}
