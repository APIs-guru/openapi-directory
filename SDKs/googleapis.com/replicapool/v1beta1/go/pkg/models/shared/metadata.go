package shared

type Metadata struct {
	FingerPrint *string        `json:"fingerPrint,omitempty"`
	Items       []MetadataItem `json:"items,omitempty"`
}
