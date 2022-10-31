package shared



type ListHl7V2StoresResponse struct {
    Hl7V2Stores []Hl7V2Store `json:"hl7V2Stores,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

