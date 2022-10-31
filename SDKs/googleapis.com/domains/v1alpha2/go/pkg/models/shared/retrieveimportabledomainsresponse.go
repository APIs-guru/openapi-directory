package shared



type RetrieveImportableDomainsResponse struct {
    Domains []Domain `json:"domains,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

