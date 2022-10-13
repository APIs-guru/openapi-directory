package shared

type ActivationResponseMetadata struct {
	RootContentID *string `json:"rootContentId"`
}

type ActivationResponse struct {
	End           *string                     `json:"end"`
	ID            *string                     `json:"id"`
	Info          *string                     `json:"info"`
	LearnersCount *string                     `json:"learnersCount"`
	Metadata      *ActivationResponseMetadata `json:"metadata"`
	Name          *string                     `json:"name"`
	Start         *string                     `json:"start"`
}
