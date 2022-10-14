package shared

type ActivationResponseMetadata struct {
	RootContentID *string `json:"rootContentId,omitempty"`
}

type ActivationResponse struct {
	End           *string                     `json:"end,omitempty"`
	ID            *string                     `json:"id,omitempty"`
	Info          *string                     `json:"info,omitempty"`
	LearnersCount *string                     `json:"learnersCount,omitempty"`
	Metadata      *ActivationResponseMetadata `json:"metadata,omitempty"`
	Name          *string                     `json:"name,omitempty"`
	Start         *string                     `json:"start,omitempty"`
}
