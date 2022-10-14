package shared

type GcsDestination struct {
	URI       *string `json:"uri,omitempty"`
	URIPrefix *string `json:"uriPrefix,omitempty"`
}
