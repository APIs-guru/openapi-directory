package shared

// Service
// An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
type Service struct {
	Annotations map[string]string `json:"annotations,omitempty"`
	Endpoints   []Endpoint        `json:"endpoints,omitempty"`
	Name        *string           `json:"name,omitempty"`
	UID         *string           `json:"uid,omitempty"`
}

// ServiceInput
// An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
type ServiceInput struct {
	Annotations map[string]string `json:"annotations,omitempty"`
	Name        *string           `json:"name,omitempty"`
}
