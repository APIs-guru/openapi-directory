package shared



type Disk struct {
    Name *string `json:"name,omitempty"`
    SizeGb *int32 `json:"sizeGb,omitempty"`
    SourceImage *string `json:"sourceImage,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

