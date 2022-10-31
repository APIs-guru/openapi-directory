package shared

type CreateCollectdTimeSeriesRequest struct {
	CollectdPayloads []CollectdPayload  `json:"collectdPayloads,omitempty"`
	CollectdVersion  *string            `json:"collectdVersion,omitempty"`
	Resource         *MonitoredResource `json:"resource,omitempty"`
}
