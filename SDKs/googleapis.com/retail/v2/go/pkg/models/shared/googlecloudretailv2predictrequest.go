package shared

type GoogleCloudRetailV2PredictRequest struct {
	Filter       *string                       `json:"filter"`
	Labels       map[string]string             `json:"labels"`
	PageSize     *int32                        `json:"pageSize"`
	PageToken    *string                       `json:"pageToken"`
	Params       map[string]interface{}        `json:"params"`
	UserEvent    *GoogleCloudRetailV2UserEvent `json:"userEvent"`
	ValidateOnly *bool                         `json:"validateOnly"`
}
