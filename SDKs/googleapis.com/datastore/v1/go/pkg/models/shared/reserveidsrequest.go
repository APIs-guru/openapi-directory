package shared



type ReserveIdsRequest struct {
    DatabaseID *string `json:"databaseId,omitempty"`
    Keys []Key `json:"keys,omitempty"`
    
}

