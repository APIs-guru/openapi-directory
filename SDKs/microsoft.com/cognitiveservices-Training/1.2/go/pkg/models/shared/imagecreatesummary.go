package shared

type ImageCreateSummary struct {
	Images            []ImageCreateResult `json:"Images,omitempty"`
	IsBatchSuccessful *bool               `json:"IsBatchSuccessful,omitempty"`
}
