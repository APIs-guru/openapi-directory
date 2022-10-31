package shared

type PoolsDeleteRequest struct {
	AbandonInstances []string `json:"abandonInstances,omitempty"`
}
