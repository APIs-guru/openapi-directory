package shared



type ModifyLabelsRequest struct {
    Kind *string `json:"kind,omitempty"`
    LabelModifications []LabelModification `json:"labelModifications,omitempty"`
    
}

