package shared



type AccountsListLinksResponse struct {
    Kind *string `json:"kind,omitempty"`
    Links []LinkedAccount `json:"links,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

