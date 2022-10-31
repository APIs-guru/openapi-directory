package shared



type DocumentRemove struct {
    Document *string `json:"document,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    RemovedTargetIds []int32 `json:"removedTargetIds,omitempty"`
    
}

