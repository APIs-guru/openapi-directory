package shared

// ListVoicesResponse
// The message returned to the client by the `ListVoices` method.
type ListVoicesResponse struct {
	Voices []Voice `json:"voices,omitempty"`
}
