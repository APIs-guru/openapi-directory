package shared

// ServiceSpec
// ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
type ServiceSpec struct {
	Template *RevisionTemplate `json:"template,omitempty"`
	Traffic  []TrafficTarget   `json:"traffic,omitempty"`
}

// ServiceSpecInput
// ServiceSpec holds the desired state of the Route (from the client), which is used to manipulate the underlying Route and Configuration(s).
type ServiceSpecInput struct {
	Template *RevisionTemplate    `json:"template,omitempty"`
	Traffic  []TrafficTargetInput `json:"traffic,omitempty"`
}
