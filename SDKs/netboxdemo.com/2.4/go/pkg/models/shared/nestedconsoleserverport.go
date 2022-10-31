package shared



type NestedConsoleServerPort struct {
    Device *NestedDevice `json:"device,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsConnected *string `json:"is_connected,omitempty"`
    Name string `json:"name"`
    URL *string `json:"url,omitempty"`
    
}

