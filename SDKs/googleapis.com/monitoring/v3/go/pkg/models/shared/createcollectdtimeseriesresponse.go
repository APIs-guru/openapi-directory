package shared



type CreateCollectdTimeSeriesResponse struct {
    PayloadErrors []CollectdPayloadError `json:"payloadErrors,omitempty"`
    Summary *CreateTimeSeriesSummary `json:"summary,omitempty"`
    
}

