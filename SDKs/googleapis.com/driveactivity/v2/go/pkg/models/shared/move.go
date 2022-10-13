package shared

type Move struct {
	AddedParents   []TargetReference `json:"addedParents"`
	RemovedParents []TargetReference `json:"removedParents"`
}
