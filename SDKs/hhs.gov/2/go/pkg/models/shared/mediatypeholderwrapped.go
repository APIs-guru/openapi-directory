package shared



type MediaTypeHolderWrapped struct {
    Callback *string `json:"callback,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Results []MediaTypeHolder `json:"results,omitempty"`
    
}

