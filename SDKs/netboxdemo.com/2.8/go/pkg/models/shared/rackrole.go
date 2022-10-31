package shared



type RackRole struct {
    Color *string `json:"color,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    RackCount *int64 `json:"rack_count,omitempty"`
    Slug string `json:"slug"`
    
}

