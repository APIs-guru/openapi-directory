package shared



type Service struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    Endpoints []Endpoint `json:"endpoints,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

