package shared

// DocumentDelete
// A Document has been deleted. May be the result of multiple writes, including updates, the last of which deleted the Document. Multiple DocumentDelete messages may be returned for the same logical delete, if multiple targets are affected.
type DocumentDelete struct {
	Document         *string `json:"document,omitempty"`
	ReadTime         *string `json:"readTime,omitempty"`
	RemovedTargetIds []int32 `json:"removedTargetIds,omitempty"`
}
