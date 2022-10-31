package shared

type Exfiltration struct {
	Sources []ExfilResource `json:"sources,omitempty"`
	Targets []ExfilResource `json:"targets,omitempty"`
}
