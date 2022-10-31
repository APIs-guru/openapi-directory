package shared



type Moderation struct {
    IsMuted *bool `json:"isMuted,omitempty"`
    Moderator *Moderator `json:"moderator,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

