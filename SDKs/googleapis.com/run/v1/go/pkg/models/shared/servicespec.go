package shared

type ServiceSpec struct {
	Template *RevisionTemplate `json:"template,omitempty"`
	Traffic  []TrafficTarget   `json:"traffic,omitempty"`
}
