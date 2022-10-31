package shared



type ClientInitialAccessPresentation struct {
    Count *int32 `json:"count,omitempty"`
    Expiration *int32 `json:"expiration,omitempty"`
    ID *string `json:"id,omitempty"`
    RemainingCount *int32 `json:"remainingCount,omitempty"`
    Timestamp *int32 `json:"timestamp,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

