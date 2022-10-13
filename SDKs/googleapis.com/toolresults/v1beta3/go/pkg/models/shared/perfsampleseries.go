package shared

type PerfSampleSeries struct {
	BasicPerfSampleSeries *BasicPerfSampleSeries `json:"basicPerfSampleSeries"`
	ExecutionID           *string                `json:"executionId"`
	HistoryID             *string                `json:"historyId"`
	ProjectID             *string                `json:"projectId"`
	SampleSeriesID        *string                `json:"sampleSeriesId"`
	StepID                *string                `json:"stepId"`
}
