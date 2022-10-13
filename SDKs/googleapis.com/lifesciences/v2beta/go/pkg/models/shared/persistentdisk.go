package shared

type PersistentDisk struct {
	SizeGb      *int32  `json:"sizeGb"`
	SourceImage *string `json:"sourceImage"`
	Type        *string `json:"type"`
}
