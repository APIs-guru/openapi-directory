package shared

type AnnotationsSummaryLayers struct {
	AllowedCharacterCount   *int32  `json:"allowedCharacterCount"`
	LayerID                 *string `json:"layerId"`
	LimitType               *string `json:"limitType"`
	RemainingCharacterCount *int32  `json:"remainingCharacterCount"`
	Updated                 *string `json:"updated"`
}

type AnnotationsSummary struct {
	Kind   *string                    `json:"kind"`
	Layers []AnnotationsSummaryLayers `json:"layers"`
}
