package shared

// GoogleCloudContactcenterinsightsV1GcsSource
// A Cloud Storage source of conversation data.
type GoogleCloudContactcenterinsightsV1GcsSource struct {
	AudioURI      *string `json:"audioUri,omitempty"`
	TranscriptURI *string `json:"transcriptUri,omitempty"`
}
