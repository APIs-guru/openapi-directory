package shared

type CreateCollectdTimeSeriesRequest struct {
	CollectdPayloads []CollectdPayload  `json:"collectdPayloads"`
	CollectdVersion  *string            `json:"collectdVersion"`
	Resource         *MonitoredResource `json:"resource"`
}
