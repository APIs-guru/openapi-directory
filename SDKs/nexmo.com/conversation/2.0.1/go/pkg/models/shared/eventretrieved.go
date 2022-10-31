package shared



type EventRetrieved struct {
    Body map[string]interface{} `json:"body"`
    From *string `json:"from,omitempty"`
    Href string `json:"href"`
    ID string `json:"id"`
    State *MemberStateEnum `json:"state,omitempty"`
    Timestamp string `json:"timestamp"`
    To *string `json:"to,omitempty"`
    Type string `json:"type"`
    
}

