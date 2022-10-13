package shared

type ExistenceFilter struct {
	Count    *int32 `json:"count"`
	TargetID *int32 `json:"targetId"`
}
