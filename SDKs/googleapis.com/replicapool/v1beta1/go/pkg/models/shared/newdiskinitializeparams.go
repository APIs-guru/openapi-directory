package shared



type NewDiskInitializeParams struct {
    DiskSizeGb *string `json:"diskSizeGb,omitempty"`
    DiskType *string `json:"diskType,omitempty"`
    SourceImage *string `json:"sourceImage,omitempty"`
    
}

