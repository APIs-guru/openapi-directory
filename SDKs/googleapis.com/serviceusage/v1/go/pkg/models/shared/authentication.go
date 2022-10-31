package shared



type Authentication struct {
    Providers []AuthProvider `json:"providers,omitempty"`
    Rules []AuthenticationRule `json:"rules,omitempty"`
    
}

