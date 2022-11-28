package shared

// Transport
// Represents the transport intermediaries created for the trigger in order to deliver events.
type Transport struct {
	Pubsub *Pubsub `json:"pubsub,omitempty"`
}

// TransportInput
// Represents the transport intermediaries created for the trigger in order to deliver events.
type TransportInput struct {
	Pubsub *PubsubInput `json:"pubsub,omitempty"`
}
