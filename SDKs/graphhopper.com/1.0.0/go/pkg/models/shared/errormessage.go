package shared

type ErrorMessage struct {
	Details *string `json:"details"`
	Message *string `json:"message"`
}
