package shared

type DocumentChange struct {
	Document         *Document `json:"document,omitempty"`
	RemovedTargetIds []int32   `json:"removedTargetIds,omitempty"`
	TargetIds        []int32   `json:"targetIds,omitempty"`
}
