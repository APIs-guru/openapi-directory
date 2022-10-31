package shared



type GroupObjectsRequest struct {
    ChildrenObjectIds []string `json:"childrenObjectIds,omitempty"`
    GroupObjectID *string `json:"groupObjectId,omitempty"`
    
}

