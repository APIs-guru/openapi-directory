package shared

type CustomEventsBatchInsertRequest struct {
	CustomEvents []CustomEvent `json:"customEvents"`
	Kind         *string       `json:"kind"`
}
