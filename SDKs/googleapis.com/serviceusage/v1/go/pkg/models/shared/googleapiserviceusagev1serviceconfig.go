package shared



type GoogleAPIServiceusageV1ServiceConfig struct {
    Apis []API `json:"apis,omitempty"`
    Authentication *Authentication `json:"authentication,omitempty"`
    Documentation *Documentation `json:"documentation,omitempty"`
    Endpoints []Endpoint `json:"endpoints,omitempty"`
    MonitoredResources []MonitoredResourceDescriptor `json:"monitoredResources,omitempty"`
    Monitoring *Monitoring `json:"monitoring,omitempty"`
    Name *string `json:"name,omitempty"`
    Quota *Quota `json:"quota,omitempty"`
    Title *string `json:"title,omitempty"`
    Usage *Usage `json:"usage,omitempty"`
    
}

