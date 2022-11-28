package shared

// Exfiltration
// Exfiltration represents a data exfiltration attempt of one or more sources to one or more targets. Sources represent the source of data that is exfiltrated, and Targets represents the destination the data was copied to.
type Exfiltration struct {
	Sources []ExfilResource `json:"sources,omitempty"`
	Targets []ExfilResource `json:"targets,omitempty"`
}
