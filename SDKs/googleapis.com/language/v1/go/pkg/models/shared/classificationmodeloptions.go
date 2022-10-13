package shared

type ClassificationModelOptions struct {
	V1Model map[string]interface{} `json:"v1Model"`
	V2Model *V2Model               `json:"v2Model"`
}
