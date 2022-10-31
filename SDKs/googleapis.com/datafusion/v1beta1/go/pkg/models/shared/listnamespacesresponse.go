package shared



type ListNamespacesResponse struct {
    Namespaces []Namespace `json:"namespaces,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

