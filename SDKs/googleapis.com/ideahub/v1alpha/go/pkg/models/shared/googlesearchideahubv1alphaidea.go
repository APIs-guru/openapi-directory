package shared

type GoogleSearchIdeahubV1alphaIdea struct {
	Name   *string                           `json:"name"`
	Text   *string                           `json:"text"`
	Topics []GoogleSearchIdeahubV1alphaTopic `json:"topics"`
}
