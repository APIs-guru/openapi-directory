package shared



type ListRuntimesResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Runtimes []Runtime `json:"runtimes,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

