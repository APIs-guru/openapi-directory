package shared



type Region struct {
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Parent *NestedRegion `json:"parent,omitempty"`
    Slug string `json:"slug"`
    
}

