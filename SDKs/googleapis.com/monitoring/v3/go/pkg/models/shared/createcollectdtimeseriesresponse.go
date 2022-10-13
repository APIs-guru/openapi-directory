package shared

type CreateCollectdTimeSeriesResponse struct {
	PayloadErrors []CollectdPayloadError   `json:"payloadErrors"`
	Summary       *CreateTimeSeriesSummary `json:"summary"`
}
