package shared



type IngestMessageResponse struct {
    Hl7Ack *string `json:"hl7Ack,omitempty"`
    Message *Message `json:"message,omitempty"`
    
}

