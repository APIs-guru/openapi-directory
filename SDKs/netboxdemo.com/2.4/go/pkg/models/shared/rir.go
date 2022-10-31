package shared



type Rir struct {
    ID *int64 `json:"id,omitempty"`
    IsPrivate *bool `json:"is_private,omitempty"`
    Name string `json:"name"`
    Slug string `json:"slug"`
    
}

