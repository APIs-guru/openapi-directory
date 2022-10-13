package shared

type ErrorMessage struct {
	ErrorMessage *string `json:"errorMessage"`
	Source       *Source `json:"source"`
}
