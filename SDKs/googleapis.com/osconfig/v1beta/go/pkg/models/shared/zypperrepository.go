package shared



type ZypperRepository struct {
    BaseURL *string `json:"baseUrl,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    GpgKeys []string `json:"gpgKeys,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

