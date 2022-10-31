package shared



type ListGuardiansResponse struct {
    Guardians []Guardian `json:"guardians,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

