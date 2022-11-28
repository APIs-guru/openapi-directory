package shared

// DocumentRemove
// A Document has been removed from the view of the targets. Sent if the document is no longer relevant to a target and is out of view. Can be sent instead of a DocumentDelete or a DocumentChange if the server can not send the new value of the document. Multiple DocumentRemove messages may be returned for the same logical write or delete, if multiple targets are affected.
type DocumentRemove struct {
	Document         *string `json:"document,omitempty"`
	ReadTime         *string `json:"readTime,omitempty"`
	RemovedTargetIds []int32 `json:"removedTargetIds,omitempty"`
}
