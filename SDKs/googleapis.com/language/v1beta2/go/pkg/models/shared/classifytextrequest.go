package shared

// ClassifyTextRequest
// The document classification request message.
type ClassifyTextRequest struct {
	ClassificationModelOptions *ClassificationModelOptions `json:"classificationModelOptions,omitempty"`
	Document                   *Document                   `json:"document,omitempty"`
}
