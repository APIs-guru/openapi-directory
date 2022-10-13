package shared

type EventUpdateRequest struct {
	DefinitionID *string `json:"definitionId"`
	Kind         *string `json:"kind"`
	UpdateCount  *string `json:"updateCount"`
}
