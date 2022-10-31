package shared



type WritableRackGroup struct {
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Parent *int64 `json:"parent,omitempty"`
    RackCount *int64 `json:"rack_count,omitempty"`
    Site int64 `json:"site"`
    Slug string `json:"slug"`
    
}

