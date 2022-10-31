package shared

type GoogleSearchIdeahubV1alphaIdea struct {
	Name   *string                           `json:"name,omitempty"`
	Text   *string                           `json:"text,omitempty"`
	Topics []GoogleSearchIdeahubV1alphaTopic `json:"topics,omitempty"`
}
