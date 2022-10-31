package shared

type PersistentDisk struct {
	SizeGb      *int32  `json:"sizeGb,omitempty"`
	SourceImage *string `json:"sourceImage,omitempty"`
	Type        *string `json:"type,omitempty"`
}
