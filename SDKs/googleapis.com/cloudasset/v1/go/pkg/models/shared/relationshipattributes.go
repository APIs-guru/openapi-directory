package shared



type RelationshipAttributes struct {
    Action *string `json:"action,omitempty"`
    SourceResourceType *string `json:"sourceResourceType,omitempty"`
    TargetResourceType *string `json:"targetResourceType,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

