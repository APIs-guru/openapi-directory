package shared

type CustomEventsBatchInsertRequest struct {
	CustomEvents []CustomEvent `json:"customEvents,omitempty"`
	Kind         *string       `json:"kind,omitempty"`
}
