package shared

type Logging struct {
	ConsumerDestinations []LoggingDestination `json:"consumerDestinations,omitempty"`
	ProducerDestinations []LoggingDestination `json:"producerDestinations,omitempty"`
}
