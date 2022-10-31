package shared



type TimeEvent struct {
    Annotation *Annotation `json:"annotation,omitempty"`
    MessageEvent *MessageEvent `json:"messageEvent,omitempty"`
    Time *string `json:"time,omitempty"`
    
}

