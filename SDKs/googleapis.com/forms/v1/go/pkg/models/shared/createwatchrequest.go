package shared



type CreateWatchRequest struct {
    Watch *Watch `json:"watch,omitempty"`
    WatchID *string `json:"watchId,omitempty"`
    
}

