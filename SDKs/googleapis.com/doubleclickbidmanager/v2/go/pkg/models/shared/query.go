package shared



type Query struct {
    Metadata *QueryMetadata `json:"metadata,omitempty"`
    Params *Parameters `json:"params,omitempty"`
    QueryID *string `json:"queryId,omitempty"`
    Schedule *QuerySchedule `json:"schedule,omitempty"`
    
}

