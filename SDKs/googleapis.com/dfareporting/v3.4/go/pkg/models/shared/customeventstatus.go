package shared

type CustomEventStatus struct {
	CustomEvent *CustomEvent       `json:"customEvent"`
	Errors      []CustomEventError `json:"errors"`
	Kind        *string            `json:"kind"`
}
