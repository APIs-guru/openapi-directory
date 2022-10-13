package shared

type Fingerprint struct {
	V1Name *string  `json:"v1Name"`
	V2Blob []string `json:"v2Blob"`
	V2Name *string  `json:"v2Name"`
}
