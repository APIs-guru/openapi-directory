package shared



type ArtifactObjects struct {
    Location *string `json:"location,omitempty"`
    Paths []string `json:"paths,omitempty"`
    Timing *TimeSpan `json:"timing,omitempty"`
    
}

