package shared



type Monitoring struct {
    ConsumerDestinations []MonitoringDestination `json:"consumerDestinations,omitempty"`
    ProducerDestinations []MonitoringDestination `json:"producerDestinations,omitempty"`
    
}

