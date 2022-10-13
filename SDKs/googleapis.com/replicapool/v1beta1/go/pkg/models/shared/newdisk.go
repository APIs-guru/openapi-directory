package shared

type NewDisk struct {
	Attachment       *DiskAttachment          `json:"attachment"`
	AutoDelete       *bool                    `json:"autoDelete"`
	Boot             *bool                    `json:"boot"`
	InitializeParams *NewDiskInitializeParams `json:"initializeParams"`
}
