package shared

type Action struct {
	InputParameters []InputParameter `json:"inputParameters"`
	Name            *string          `json:"name"`
	ResultMetadata  []ResultMetadata `json:"resultMetadata"`
}
