package shared



type ListRuntimeVersionsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RuntimeVersions []RuntimeVersion `json:"runtimeVersions,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

