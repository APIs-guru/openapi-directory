package shared

// ExistingDisk
// A pre-existing persistent disk that will be attached to every Replica in the Pool in READ_ONLY mode.
type ExistingDisk struct {
	Attachment *DiskAttachment `json:"attachment,omitempty"`
	Source     *string         `json:"source,omitempty"`
}
