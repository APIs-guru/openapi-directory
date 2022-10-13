package shared

type ClassifyTextRequest struct {
	ClassificationModelOptions *ClassificationModelOptions `json:"classificationModelOptions"`
	Document                   *Document                   `json:"document"`
}
