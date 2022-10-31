package shared



type ExistingDisk struct {
    Attachment *DiskAttachment `json:"attachment,omitempty"`
    Source *string `json:"source,omitempty"`
    
}

