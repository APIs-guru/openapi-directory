package shared

type MultiStep struct {
	MultistepNumber *int32       `json:"multistepNumber"`
	PrimaryStep     *PrimaryStep `json:"primaryStep"`
	PrimaryStepID   *string      `json:"primaryStepId"`
}
