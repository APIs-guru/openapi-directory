package shared

type Logging struct {
	ConsumerDestinations []LoggingDestination `json:"consumerDestinations"`
	ProducerDestinations []LoggingDestination `json:"producerDestinations"`
}
