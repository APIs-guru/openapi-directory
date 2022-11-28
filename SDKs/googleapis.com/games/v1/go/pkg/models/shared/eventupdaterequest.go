package shared

// EventUpdateRequest
// An event period update resource.
type EventUpdateRequest struct {
	DefinitionID *string `json:"definitionId,omitempty"`
	Kind         *string `json:"kind,omitempty"`
	UpdateCount  *string `json:"updateCount,omitempty"`
}
