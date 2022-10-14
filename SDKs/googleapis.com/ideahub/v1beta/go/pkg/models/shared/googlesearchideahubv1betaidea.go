package shared

type GoogleSearchIdeahubV1betaIdea struct {
	Name   *string                          `json:"name,omitempty"`
	Text   *string                          `json:"text,omitempty"`
	Topics []GoogleSearchIdeahubV1betaTopic `json:"topics,omitempty"`
}
