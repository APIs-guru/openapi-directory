package shared



type RegularFile struct {
    Content *FileReference `json:"content,omitempty"`
    DevicePath *string `json:"devicePath,omitempty"`
    
}

