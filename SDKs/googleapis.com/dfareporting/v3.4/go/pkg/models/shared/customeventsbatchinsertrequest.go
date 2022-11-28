package shared

// CustomEventsBatchInsertRequest
// Insert Custom Events Request.
type CustomEventsBatchInsertRequest struct {
	CustomEvents []CustomEvent `json:"customEvents,omitempty"`
	Kind         *string       `json:"kind,omitempty"`
}
