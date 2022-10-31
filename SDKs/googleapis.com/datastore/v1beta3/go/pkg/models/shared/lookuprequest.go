package shared



type LookupRequest struct {
    Keys []Key `json:"keys,omitempty"`
    ReadOptions *ReadOptions `json:"readOptions,omitempty"`
    
}

