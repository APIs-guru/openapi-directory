package shared

type ImuDataGapFailureDetails struct {
	GapDuration  *string `json:"gapDuration"`
	GapStartTime *string `json:"gapStartTime"`
}
