package shared

type ImageCreateSummary struct {
	Images            []ImageCreateResult `json:"images,omitempty"`
	IsBatchSuccessful *bool               `json:"isBatchSuccessful,omitempty"`
}
