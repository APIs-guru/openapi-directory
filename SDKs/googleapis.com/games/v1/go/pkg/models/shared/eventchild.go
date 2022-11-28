package shared

// EventChild
// An event child relationship resource.
type EventChild struct {
	ChildID *string `json:"childId,omitempty"`
	Kind    *string `json:"kind,omitempty"`
}
