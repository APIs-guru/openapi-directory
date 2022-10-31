package shared



type Location struct {
    CpeURI *string `json:"cpeUri,omitempty"`
    Path *string `json:"path,omitempty"`
    Version *Version `json:"version,omitempty"`
    
}

