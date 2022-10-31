package shared



type CloneVersionRequest struct {
    Exclude *PathFilter `json:"exclude,omitempty"`
    Finalize *bool `json:"finalize,omitempty"`
    Include *PathFilter `json:"include,omitempty"`
    SourceVersion *string `json:"sourceVersion,omitempty"`
    
}

