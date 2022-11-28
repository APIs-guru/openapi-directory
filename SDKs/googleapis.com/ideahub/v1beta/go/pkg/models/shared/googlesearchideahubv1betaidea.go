package shared

// GoogleSearchIdeahubV1betaIdea
// A single Idea that we want to show the end user.
type GoogleSearchIdeahubV1betaIdea struct {
	Name   *string                          `json:"name,omitempty"`
	Text   *string                          `json:"text,omitempty"`
	Topics []GoogleSearchIdeahubV1betaTopic `json:"topics,omitempty"`
}
