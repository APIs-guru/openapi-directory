package shared



type AnnotationsSummaryLayers struct {
    AllowedCharacterCount *int32 `json:"allowedCharacterCount,omitempty"`
    LayerID *string `json:"layerId,omitempty"`
    LimitType *string `json:"limitType,omitempty"`
    RemainingCharacterCount *int32 `json:"remainingCharacterCount,omitempty"`
    Updated *string `json:"updated,omitempty"`
    
}

type AnnotationsSummary struct {
    Kind *string `json:"kind,omitempty"`
    Layers []AnnotationsSummaryLayers `json:"layers,omitempty"`
    
}

