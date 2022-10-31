package shared



type RoleRepresentationComposites struct {
    Client map[string]interface{} `json:"client,omitempty"`
    Realm []string `json:"realm,omitempty"`
    
}

