package shared

type Disk struct {
	Name        *string `json:"name"`
	SizeGb      *int32  `json:"sizeGb"`
	SourceImage *string `json:"sourceImage"`
	Type        *string `json:"type"`
}
