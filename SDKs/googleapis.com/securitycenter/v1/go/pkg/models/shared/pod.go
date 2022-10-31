package shared

type Pod struct {
	Containers []Container `json:"containers,omitempty"`
	Labels     []Label     `json:"labels,omitempty"`
	Name       *string     `json:"name,omitempty"`
	Ns         *string     `json:"ns,omitempty"`
}
