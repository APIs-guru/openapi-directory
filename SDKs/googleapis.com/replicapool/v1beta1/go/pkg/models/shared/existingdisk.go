package shared

type ExistingDisk struct {
	Attachment *DiskAttachment `json:"attachment"`
	Source     *string         `json:"source"`
}
