package shared



type ListMessagesResponse struct {
    Hl7V2Messages []Message `json:"hl7V2Messages,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

