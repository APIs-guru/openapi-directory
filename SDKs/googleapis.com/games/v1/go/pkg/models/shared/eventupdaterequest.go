package shared



type EventUpdateRequest struct {
    DefinitionID *string `json:"definitionId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    UpdateCount *string `json:"updateCount,omitempty"`
    
}

