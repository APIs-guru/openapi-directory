package shared

type ImageCreateSummary struct {
	Images            []ImageCreateResult `json:"Images"`
	IsBatchSuccessful *bool               `json:"IsBatchSuccessful"`
}
