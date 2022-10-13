package shared

type Exfiltration struct {
	Sources []ExfilResource `json:"sources"`
	Targets []ExfilResource `json:"targets"`
}
