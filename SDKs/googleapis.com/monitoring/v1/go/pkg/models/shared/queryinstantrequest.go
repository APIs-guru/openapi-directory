package shared

// QueryInstantRequest
// QueryInstantRequest holds all parameters of the Prometheus upstream instant query API plus GCM specific parameters.
type QueryInstantRequest struct {
	Query   *string `json:"query,omitempty"`
	Time    *string `json:"time,omitempty"`
	Timeout *string `json:"timeout,omitempty"`
}
