package shared

// Move
// An object was moved.
type Move struct {
	AddedParents   []TargetReference `json:"addedParents,omitempty"`
	RemovedParents []TargetReference `json:"removedParents,omitempty"`
}
