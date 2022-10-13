package shared

type Monitoring struct {
	ConsumerDestinations []MonitoringDestination `json:"consumerDestinations"`
	ProducerDestinations []MonitoringDestination `json:"producerDestinations"`
}
