package shared

// Target
// A Target is where an HTTP call will be forwarded in the end from a service domain
type Target struct {
	Host   string `json:"host"`
	Scheme string `json:"scheme"`
}
