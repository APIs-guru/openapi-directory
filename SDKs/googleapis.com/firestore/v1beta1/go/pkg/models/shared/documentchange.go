package shared

// DocumentChange
// A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
type DocumentChange struct {
	Document         *Document `json:"document,omitempty"`
	RemovedTargetIds []int32   `json:"removedTargetIds,omitempty"`
	TargetIds        []int32   `json:"targetIds,omitempty"`
}
