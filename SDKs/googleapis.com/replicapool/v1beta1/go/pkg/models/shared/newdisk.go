package shared

// NewDisk
// A Persistent Disk resource that will be created and attached to each Replica in the Pool. Each Replica will have a unique persistent disk that is created and attached to that Replica in READ_WRITE mode.
type NewDisk struct {
	Attachment       *DiskAttachment          `json:"attachment,omitempty"`
	AutoDelete       *bool                    `json:"autoDelete,omitempty"`
	Boot             *bool                    `json:"boot,omitempty"`
	InitializeParams *NewDiskInitializeParams `json:"initializeParams,omitempty"`
}
