package shared



type Statement struct {
    Relation *string `json:"relation,omitempty"`
    Source *Asset `json:"source,omitempty"`
    Target *Asset `json:"target,omitempty"`
    
}

