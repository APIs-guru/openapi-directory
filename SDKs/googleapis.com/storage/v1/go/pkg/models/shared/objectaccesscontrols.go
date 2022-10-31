package shared



type ObjectAccessControls struct {
    Items []ObjectAccessControl `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

