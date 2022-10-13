package shared

type ListDeliveryPipelinesResponse struct {
	DeliveryPipelines []DeliveryPipeline `json:"deliveryPipelines"`
	NextPageToken     *string            `json:"nextPageToken"`
	Unreachable       []string           `json:"unreachable"`
}
