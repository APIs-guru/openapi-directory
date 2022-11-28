package shared

// GoogleSearchIdeahubV1alphaIdea
// A single Idea that we want to show the end user.
type GoogleSearchIdeahubV1alphaIdea struct {
	Name   *string                           `json:"name,omitempty"`
	Text   *string                           `json:"text,omitempty"`
	Topics []GoogleSearchIdeahubV1alphaTopic `json:"topics,omitempty"`
}
