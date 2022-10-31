package shared

type QueryInstantRequest struct {
	Query   *string `json:"query,omitempty"`
	Time    *string `json:"time,omitempty"`
	Timeout *string `json:"timeout,omitempty"`
}
