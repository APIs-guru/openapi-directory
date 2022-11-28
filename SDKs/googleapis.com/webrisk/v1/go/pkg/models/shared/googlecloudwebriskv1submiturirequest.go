package shared

// GoogleCloudWebriskV1SubmitURIRequest
// Request to send a potentially malicious URI to WebRisk.
type GoogleCloudWebriskV1SubmitURIRequest struct {
	Submission *GoogleCloudWebriskV1Submission `json:"submission,omitempty"`
}
