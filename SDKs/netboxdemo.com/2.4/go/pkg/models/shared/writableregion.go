package shared



type WritableRegion struct {
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Parent *int64 `json:"parent,omitempty"`
    Slug string `json:"slug"`
    
}

