package shared

type ImuDataGapFailureDetails struct {
	GapDuration  *string `json:"gapDuration,omitempty"`
	GapStartTime *string `json:"gapStartTime,omitempty"`
}
