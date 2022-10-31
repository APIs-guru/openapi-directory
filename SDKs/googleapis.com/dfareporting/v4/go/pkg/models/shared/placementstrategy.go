package shared

type PlacementStrategy struct {
	AccountID *string `json:"accountId,omitempty"`
	ID        *string `json:"id,omitempty"`
	Kind      *string `json:"kind,omitempty"`
	Name      *string `json:"name,omitempty"`
}
