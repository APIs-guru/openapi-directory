package shared



type LookupRequest struct {
    DatabaseID *string `json:"databaseId,omitempty"`
    Keys []Key `json:"keys,omitempty"`
    ReadOptions *ReadOptions `json:"readOptions,omitempty"`
    
}

