package shared



type PerfSampleSeries struct {
    BasicPerfSampleSeries *BasicPerfSampleSeries `json:"basicPerfSampleSeries,omitempty"`
    ExecutionID *string `json:"executionId,omitempty"`
    HistoryID *string `json:"historyId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    SampleSeriesID *string `json:"sampleSeriesId,omitempty"`
    StepID *string `json:"stepId,omitempty"`
    
}

