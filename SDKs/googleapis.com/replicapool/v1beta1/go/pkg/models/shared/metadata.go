package shared

type Metadata struct {
	FingerPrint *string        `json:"fingerPrint"`
	Items       []MetadataItem `json:"items"`
}
