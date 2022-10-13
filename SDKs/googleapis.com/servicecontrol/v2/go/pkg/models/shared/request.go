package shared

type Request struct {
	Auth     *Auth             `json:"auth"`
	Headers  map[string]string `json:"headers"`
	Host     *string           `json:"host"`
	ID       *string           `json:"id"`
	Method   *string           `json:"method"`
	Path     *string           `json:"path"`
	Protocol *string           `json:"protocol"`
	Query    *string           `json:"query"`
	Reason   *string           `json:"reason"`
	Scheme   *string           `json:"scheme"`
	Size     *string           `json:"size"`
	Time     *string           `json:"time"`
}
