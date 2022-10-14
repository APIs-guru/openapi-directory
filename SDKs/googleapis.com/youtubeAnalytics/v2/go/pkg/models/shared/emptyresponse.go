package shared

type EmptyResponse struct {
	Errors *Errors `json:"errors,omitempty"`
}
