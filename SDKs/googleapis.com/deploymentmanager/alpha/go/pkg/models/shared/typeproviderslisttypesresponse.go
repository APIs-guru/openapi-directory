package shared



type TypeProvidersListTypesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Types []TypeInfo `json:"types,omitempty"`
    
}

