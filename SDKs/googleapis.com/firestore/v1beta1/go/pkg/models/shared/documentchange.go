package shared

type DocumentChange struct {
	Document         *Document `json:"document"`
	RemovedTargetIds []int32   `json:"removedTargetIds"`
	TargetIds        []int32   `json:"targetIds"`
}
