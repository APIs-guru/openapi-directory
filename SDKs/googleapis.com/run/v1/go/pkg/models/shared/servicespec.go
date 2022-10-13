package shared

type ServiceSpec struct {
	Template *RevisionTemplate `json:"template"`
	Traffic  []TrafficTarget   `json:"traffic"`
}
