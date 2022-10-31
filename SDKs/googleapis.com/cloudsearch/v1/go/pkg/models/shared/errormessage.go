package shared

type ErrorMessage struct {
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Source       *Source `json:"source,omitempty"`
}
