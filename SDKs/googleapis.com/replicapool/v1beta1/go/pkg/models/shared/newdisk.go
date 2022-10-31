package shared



type NewDisk struct {
    Attachment *DiskAttachment `json:"attachment,omitempty"`
    AutoDelete *bool `json:"autoDelete,omitempty"`
    Boot *bool `json:"boot,omitempty"`
    InitializeParams *NewDiskInitializeParams `json:"initializeParams,omitempty"`
    
}

