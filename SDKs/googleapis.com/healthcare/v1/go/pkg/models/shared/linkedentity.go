package shared

// LinkedEntity
// EntityMentions can be linked to multiple entities using a LinkedEntity message lets us add other fields, e.g. confidence.
type LinkedEntity struct {
	EntityID *string `json:"entityId,omitempty"`
}
