package shared

type GoogleSearchIdeahubV1betaIdea struct {
	Name   *string                          `json:"name"`
	Text   *string                          `json:"text"`
	Topics []GoogleSearchIdeahubV1betaTopic `json:"topics"`
}
