package shared



type ListServicesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Services []Service `json:"services,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

