package shared



type BrowsersListResponse struct {
    Browsers []Browser `json:"browsers,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

