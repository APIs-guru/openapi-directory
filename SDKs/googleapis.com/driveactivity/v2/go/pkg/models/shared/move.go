package shared

type Move struct {
	AddedParents   []TargetReference `json:"addedParents,omitempty"`
	RemovedParents []TargetReference `json:"removedParents,omitempty"`
}
