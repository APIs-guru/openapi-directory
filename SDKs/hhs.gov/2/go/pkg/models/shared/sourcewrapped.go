package shared



type SourceWrapped struct {
    Callback *string `json:"callback,omitempty"`
    Meta *Meta `json:"meta,omitempty"`
    Results []Source `json:"results,omitempty"`
    
}

