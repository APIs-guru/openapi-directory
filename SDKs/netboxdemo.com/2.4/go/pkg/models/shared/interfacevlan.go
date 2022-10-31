package shared



type InterfaceVlan struct {
    DisplayName *string `json:"display_name,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    URL *string `json:"url,omitempty"`
    Vid int64 `json:"vid"`
    
}

