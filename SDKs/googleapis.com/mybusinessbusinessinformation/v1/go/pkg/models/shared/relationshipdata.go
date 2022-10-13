package shared

type RelationshipData struct {
	ChildrenLocations []RelevantLocation `json:"childrenLocations"`
	ParentChain       *string            `json:"parentChain"`
	ParentLocation    *RelevantLocation  `json:"parentLocation"`
}
