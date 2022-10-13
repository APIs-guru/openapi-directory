package shared

type Delete struct {
	KeySet *KeySet `json:"keySet"`
	Table  *string `json:"table"`
}
