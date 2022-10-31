package shared



type RelationshipData struct {
    ChildrenLocations []RelevantLocation `json:"childrenLocations,omitempty"`
    ParentChain *string `json:"parentChain,omitempty"`
    ParentLocation *RelevantLocation `json:"parentLocation,omitempty"`
    
}

