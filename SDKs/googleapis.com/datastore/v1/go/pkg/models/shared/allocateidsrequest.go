package shared



type AllocateIdsRequest struct {
    DatabaseID *string `json:"databaseId,omitempty"`
    Keys []Key `json:"keys,omitempty"`
    
}

