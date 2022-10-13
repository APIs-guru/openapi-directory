package shared

type RuntimeActionSchema struct {
	Action          *string          `json:"action"`
	InputParameters []InputParameter `json:"inputParameters"`
	ResultMetadata  []ResultMetadata `json:"resultMetadata"`
}
