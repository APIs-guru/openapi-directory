package shared

// ProducerV1
// Producers are the entities that represent customers to institutions.
type ProducerV1 struct {
	Email      string  `json:"email"`
	ExternalID *string `json:"external_id,omitempty"`
	ID         string  `json:"id"`
	Name       string  `json:"name"`
}
