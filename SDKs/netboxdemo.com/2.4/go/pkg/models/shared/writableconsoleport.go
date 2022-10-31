package shared



type WritableConsolePort struct {
    ConnectionStatus *bool `json:"connection_status,omitempty"`
    CsPort *int64 `json:"cs_port,omitempty"`
    Device int64 `json:"device"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Tags []string `json:"tags,omitempty"`
    
}

