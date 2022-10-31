package shared



type GetCallResponseLinksSelf struct {
    Href *string `json:"href,omitempty"`
    
}

type GetCallResponseLinks struct {
    Self *GetCallResponseLinksSelf `json:"self,omitempty"`
    
}

type GetCallResponse struct {
    Links *GetCallResponseLinks `json:"_links,omitempty"`
    ConversationUUID *string `json:"conversation_uuid,omitempty"`
    Direction *DirectionEnum `json:"direction,omitempty"`
    Duration *string `json:"duration,omitempty"`
    EndTime *string `json:"end_time,omitempty"`
    From *From `json:"from,omitempty"`
    Network *string `json:"network,omitempty"`
    Price *string `json:"price,omitempty"`
    Rate *string `json:"rate,omitempty"`
    StartTime *string `json:"start_time,omitempty"`
    Status *string `json:"status,omitempty"`
    To *To `json:"to,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

