package shared



type LiveTvInfo struct {
    EnabledUsers []string `json:"EnabledUsers,omitempty"`
    IsEnabled *bool `json:"IsEnabled,omitempty"`
    Services []LiveTvServiceInfo `json:"Services,omitempty"`
    
}

