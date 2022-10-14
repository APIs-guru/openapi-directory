package shared

type Delete struct {
	KeySet *KeySet `json:"keySet,omitempty"`
	Table  *string `json:"table,omitempty"`
}
