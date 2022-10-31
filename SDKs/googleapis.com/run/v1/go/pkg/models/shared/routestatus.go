package shared



type RouteStatus struct {
    Address *Addressable `json:"address,omitempty"`
    Conditions []GoogleCloudRunV1Condition `json:"conditions,omitempty"`
    ObservedGeneration *int32 `json:"observedGeneration,omitempty"`
    Traffic []TrafficTarget `json:"traffic,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

