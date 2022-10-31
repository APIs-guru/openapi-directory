package shared



type ListPartnersResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Partners []Partner `json:"partners,omitempty"`
    
}

