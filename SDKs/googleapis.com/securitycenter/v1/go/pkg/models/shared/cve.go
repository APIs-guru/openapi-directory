package shared



type Cve struct {
    Cvssv3 *Cvssv3 `json:"cvssv3,omitempty"`
    ID *string `json:"id,omitempty"`
    References []Reference `json:"references,omitempty"`
    UpstreamFixAvailable *bool `json:"upstreamFixAvailable,omitempty"`
    
}

