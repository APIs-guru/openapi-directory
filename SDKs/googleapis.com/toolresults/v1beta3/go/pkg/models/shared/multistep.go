package shared



type MultiStep struct {
    MultistepNumber *int32 `json:"multistepNumber,omitempty"`
    PrimaryStep *PrimaryStep `json:"primaryStep,omitempty"`
    PrimaryStepID *string `json:"primaryStepId,omitempty"`
    
}

