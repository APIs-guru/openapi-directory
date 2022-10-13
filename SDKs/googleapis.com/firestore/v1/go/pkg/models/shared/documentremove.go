package shared

type DocumentRemove struct {
	Document         *string `json:"document"`
	ReadTime         *string `json:"readTime"`
	RemovedTargetIds []int32 `json:"removedTargetIds"`
}
