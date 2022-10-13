package shared

type ImageCreateSummary struct {
	Images            []ImageCreateResult `json:"images"`
	IsBatchSuccessful *bool               `json:"isBatchSuccessful"`
}
