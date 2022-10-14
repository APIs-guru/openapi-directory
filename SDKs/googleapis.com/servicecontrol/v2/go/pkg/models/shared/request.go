package shared

type Request struct {
	Auth     *Auth             `json:"auth,omitempty"`
	Headers  map[string]string `json:"headers,omitempty"`
	Host     *string           `json:"host,omitempty"`
	ID       *string           `json:"id,omitempty"`
	Method   *string           `json:"method,omitempty"`
	Path     *string           `json:"path,omitempty"`
	Protocol *string           `json:"protocol,omitempty"`
	Query    *string           `json:"query,omitempty"`
	Reason   *string           `json:"reason,omitempty"`
	Scheme   *string           `json:"scheme,omitempty"`
	Size     *string           `json:"size,omitempty"`
	Time     *string           `json:"time,omitempty"`
}
