package shared

// RelationshipData
// Information of all parent and children locations related to this one.
type RelationshipData struct {
	ChildrenLocations []RelevantLocation `json:"childrenLocations,omitempty"`
	ParentChain       *string            `json:"parentChain,omitempty"`
	ParentLocation    *RelevantLocation  `json:"parentLocation,omitempty"`
}
