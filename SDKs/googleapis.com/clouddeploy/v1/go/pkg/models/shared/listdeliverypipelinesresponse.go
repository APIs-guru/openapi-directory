package shared



type ListDeliveryPipelinesResponse struct {
    DeliveryPipelines []DeliveryPipeline `json:"deliveryPipelines,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

