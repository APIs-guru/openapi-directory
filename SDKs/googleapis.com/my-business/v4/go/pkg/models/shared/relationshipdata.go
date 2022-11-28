package shared

// RelationshipData
// Information of all parent and children locations related to this one.
type RelationshipData struct {
	ParentChain *string `json:"parentChain,omitempty"`
}
